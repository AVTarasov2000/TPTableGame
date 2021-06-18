import {Component, OnInit, OnDestroy, ElementRef, ViewChild, Renderer2} from '@angular/core';
import {WebRTCConnection} from '../services/WebRTCConnection';
import {SignalrService} from '../services/Signal.service';
import {Subscription} from 'rxjs';
import {PeerData, SignalInfo, UserInfo} from '../classes/peerData.interface';
import {CrossPageInformation} from '../services/crossPageInformation';
import {User} from '../classes/user';
import {UserPeer} from '../classes/UserPeer';
import {Game} from '../classes/game';
import {HttpClient} from '@angular/common/http';
import {GameSettingsModalDialogComponent} from '../game-settings-modal-dialog/game-settings-modal-dialog.component';
import {ClipboardService} from 'ngx-clipboard';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-waiting-room-page',
  templateUrl: './waiting-room-page.component.html',
  styleUrls: ['./waiting-room-page.component.css']
})
export class WaitingRoomPageComponent implements OnInit, OnDestroy {

  constructor(public rtcService: WebRTCConnection,
              private signalR: SignalrService,
              private crossPageInformation: CrossPageInformation,
              private http: HttpClient,
              private renderer: Renderer2,
              private clipboardService: ClipboardService,
              private route: ActivatedRoute) { }
  public subscriptions = new Subscription();

  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  @ViewChild('videoContainer') videoContainer: ElementRef;

  // public users: UserPeer[] = [];


  private stream: any;

  // @ts-ignore
  public currentUser: string;

  // @ts-ignore
  public dataString: string;

  // @ts-ignore
  public userVideo: string;
  login = '';
  password = '';
  doYouNeedToDeleteYourUserData = false;

  onEasyStart(): void{
    this.http.post<User>('https://abdyabdya.duckdns.org:27050/app/generate/user',
      {login: this.login} ).subscribe(
      (user) => {
        this.crossPageInformation.currentUser = user;
      },
      err => {alert('соединение с сервером потеряно'); }
    );
    this.saveUsername();
    this.doYouNeedToDeleteYourUserData = true;
  }

  ngOnInit(): void {
    if (!this.crossPageInformation.room) {
      this.route.params
        .subscribe((params: any) => {
          this.crossPageInformation.room = params.roomId;
        });
    }
    this.subscriptions.add(this.signalR.newPeer$.subscribe((user: string[]) => {
      console.log(user);
      this.rtcService.usersPeers = [];
      // tslint:disable-next-line:forin
      for (const userKey of user) {
        console.log(userKey);
        this.rtcService.usersPeers.push({user: userKey, peer: null});
      }
      // this.rtcService.newUser(user);
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
      this.signalR.sendSignalToRoom(data.id, {signal: data.data, user: login, target: data.target});
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

    if (this.crossPageInformation.currentUser){
      this.saveUsername();
    }
  }

  public checkUser(): boolean{
    if (this.crossPageInformation.currentUser){
      return false;
    }
    return true;
  }

  public onVoiceChatStarted(): void {
    if (this.crossPageInformation.currentUser){
      this.onEasyStart();
    }
    // todo roomId
    for (let i = 0; i < this.rtcService.usersPeers.length; i++) {
      // this.rtcService.currentPeer = this.rtcService.createPeer(this.stream, '0', true, this.users[i].user);
      this.rtcService.usersPeers[i].peer = this.rtcService.createPeer(this.stream, '0', true, this.rtcService.usersPeers[i].user);
    }
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
    if (this.doYouNeedToDeleteYourUserData) {
      const user = new User('', this.crossPageInformation.currentUser.login, '');
      this.http.post<User>('https://abdyabdya.duckdns.org:27050/app/user/delete', user);
      this.crossPageInformation.currentUser = null;
    }
  }

  public trySignIn(userName: string, login: string, password: string): void{
    const user = new User(userName, login, password);
    this.http.post<User>('https://abdyabdya.duckdns.org:27050/app/login/authentication', user).subscribe(
      (e) => {
        if (e == null) {
          alert('ошибка входа');
        }
        else {
          this.crossPageInformation.currentUser = e;
        }
      },
      err => {alert('соединение с сервером потеряно');
      }
    );
  }

  public copyLink(): void {
    this.clipboardService.copy('https://avtarasov2000.github.io/waitingRoom/' + this.crossPageInformation.room);
  }


  signIn(): void{
    this.trySignIn('', this.login, this.password);
  }

}
