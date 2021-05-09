import {Component, OnInit, OnDestroy, ElementRef, ViewChild, Renderer2} from '@angular/core';
import {WebRTCConnection} from '../services/WebRTCConnection';
import {SignalrService} from '../services/Signal.service';
import {Subscription} from 'rxjs';
import {PeerData, SignalInfo, UserInfo} from '../classes/peerData.interface';
import {CrossPageInformation} from '../services/crossPageInformation';

@Component({
  selector: 'app-waiting-room-page',
  templateUrl: './waiting-room-page.component.html',
  styleUrls: ['./waiting-room-page.component.css']
})
export class WaitingRoomPageComponent implements OnInit, OnDestroy {

  constructor(private rtcService: WebRTCConnection,
              private signalR: SignalrService,
              private crossPageInformation: CrossPageInformation,
              private renderer: Renderer2) { }
  public subscriptions = new Subscription();

  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  @ViewChild('videoContainer') videoContainer: ElementRef;


  private stream: any;

  // @ts-ignore
  public currentUser: string;

  // @ts-ignore
  public dataString: string;

  // @ts-ignore
  public userVideo: string;


  ngOnInit(): void {
    this.subscriptions.add(this.signalR.newPeer$.subscribe((user: UserInfo) => {
      this.rtcService.newUser(user);
      // this.signalR.sayHello(this.currentUser, user.connectionId);
    }));

    this.subscriptions.add(this.signalR.helloAnswer$.subscribe((user: UserInfo) => {
      this.rtcService.newUser(user);
    }));

    this.subscriptions.add(this.signalR.disconnectedPeer$.subscribe((user: UserInfo) => {
      this.rtcService.disconnectedUser(user);
    }));

    this.subscriptions.add(this.signalR.signal$.subscribe((signalData: SignalInfo) => {
      this.rtcService.signalPeer(signalData.user, signalData.signal, this.stream);
    }));

    this.subscriptions.add(this.rtcService.onSignalToSend$.subscribe((data: PeerData) => {
      let login = '';
      if (this.crossPageInformation.currentUser){
        login = this.crossPageInformation.currentUser.login;
      }
      else {
        login = '';
      }
      this.signalR.sendSignalToRoom(data.data, data.id, login);
    }));

    this.subscriptions.add(this.rtcService.onData$.subscribe((data: PeerData) => {
      // this.messages = [...this.messages, { own: false, message: data.data }];
      console.log(`Data from user ${data.id}: ${data.data}`);
    }));

    this.subscriptions.add(this.rtcService.onStream$.subscribe((data: PeerData) => {
      const videoElement = this.renderer.createElement('video');
      videoElement.srcObject = data.data;
      videoElement.play();
      // videoElement.load();
      this.renderer.appendChild(this.videoContainer.nativeElement, videoElement);

      this.userVideo = data.id;
      // this.videoPlayer.nativeElement.srcObject = data.data;
      // this.videoPlayer.nativeElement.load();
      // this.videoPlayer.nativeElement.play();
    }));

    this.saveUsername();
  }

  public onVoiceChatStarted(): void {
    // todo roomId
    this.rtcService.currentPeer = this.rtcService.createPeer(this.stream, '0', true);
  }

  public async saveUsername(): Promise<void> {
    try {
      await this.signalR.startConnection(this.crossPageInformation.currentUser.login, '0'); // todo
      this.stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
    } catch (error) {
      console.error(`Can't join room, error ${error}`);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
