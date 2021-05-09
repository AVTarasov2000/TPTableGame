import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {Message} from '@stomp/stompjs';
import {RxStompService} from '@stomp/ng2-stompjs';
import {SignalInfo, UserInfo} from '../classes/peerData.interface';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {


  private newPeer = new Subject<UserInfo>();
  public newPeer$ = this.newPeer.asObservable();

  private helloAnswer = new Subject<UserInfo>();
  public helloAnswer$ = this.helloAnswer.asObservable();

  private disconnectedPeer = new Subject<UserInfo>();
  public disconnectedPeer$ = this.disconnectedPeer.asObservable();

  private signal = new Subject<SignalInfo>();
  public signal$ = this.signal.asObservable();



  constructor(private rxStompService: RxStompService) { }



  public async startConnection(currentUser: string, roomId: string): Promise<void> {

    this.rxStompService.watch('/user/' + currentUser + '/socket/userArrived')
      .subscribe((message: Message) => {
        console.log(message);
        this.newUserArrived(message.body);
    });


    this.rxStompService.watch('/user/' + currentUser + '/socket/UserDisconnect')
      .subscribe((message: Message) => {
        this.userDisconnect(message.body);
      });

    this.rxStompService.watch('/user/' + currentUser + '/socket/sendSignal')
      .subscribe((message: Message) => {
        console.log(message);
        const data = JSON.parse(message.body);
        // this.sendSignal(data.user, data.signal, currentUser);
        this.signal.next(data);
      });

    this.sendNewUserSignal(currentUser, roomId);
  }

  public newUserArrived(data): void{
    this.newPeer.next(JSON.parse(data));
  }

  public userDisconnect(data): void{
    this.disconnectedPeer.next(JSON.parse(data));
  }

  public sendSignal(room, signal, currentUser): void{
    const message: SignalInfo = {signal, user: currentUser};
    console.log(message);
    this.rxStompService.publish({ destination: '/app/videoChat/' + room + '/sendSignal',
      body: JSON.stringify(message)});
    // this.signal.next({ user, signal });
  }

  public sendSignalToRoom(signal: string, room: string, currentUser): void {
    this.sendSignal(room, signal, currentUser);
  }

  public sendNewUserSignal(currentUser, roomId): void{
    const message = JSON.stringify({user: currentUser});
    this.rxStompService.publish({ destination: '/app/videoChat/' + roomId + '/newUser', body: message });
  }
}
