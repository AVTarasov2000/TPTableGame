import {Injectable} from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Instance, SignalData} from 'simple-peer';
import {PeerData, UserInfo} from '../classes/peerData.interface';
import {UserPeer} from '../classes/UserPeer';
import {logger} from 'codelyzer/util/logger';



@Injectable({
  providedIn: 'root'
})
export class WebRTCConnection{

  private users: BehaviorSubject<Array<UserInfo>>;
  public users$: Observable<Array<UserInfo>>;

  private onSignalToSend = new Subject<PeerData>();
  public onSignalToSend$ = this.onSignalToSend.asObservable();

  private onStream = new Subject<PeerData>();
  public onStream$ = this.onStream.asObservable();

  private onConnect = new Subject<PeerData>();
  public onConnect$ = this.onConnect.asObservable();

  private onData = new Subject<PeerData>();
  public onData$ = this.onData.asObservable();

  public currentPeer: Instance;

  public usersPeers: UserPeer[] = [];

  constructor() {
    this.users = new BehaviorSubject(new Array<UserInfo>());
    this.users$ = this.users.asObservable();
  }


  public newUser(user: UserInfo): void {
    this.users.next([...this.users.getValue(), user]);
  }


  public disconnectedUser(user: UserInfo): void {
    const filteredUsers = this.users.getValue().filter(x => x.connectionId === user.connectionId);
    this.users.next(filteredUsers);
  }


  public createPeer(stream: any, roomId: string, initiator: boolean, target): Instance {
    const peer = new SimplePeer({ initiator, stream, trickle: false });

    peer.on('signal', data => {
      const stringData = JSON.stringify(data);
      this.onSignalToSend.next({ id: roomId, data: stringData, target});
    });

    peer.on('stream', data => {
      console.log('on stream', data);
      this.onStream.next({ id: roomId, data, target});
    });

    peer.on('connect', () => {
      this.onConnect.next({ id: roomId, data: null, target});
    });

    peer.on('data', data => {
      this.onData.next({ id: roomId, data, target});
    });

    return peer;
  }



  public signalPeer(userId: string, signal: string, stream: any): void {
    const signalObject = JSON.parse(signal);
    let tmp: UserPeer = {user: '', peer: null};
    for (let i = 0; i < this.usersPeers.length; i++) {
      console.log(this.usersPeers[i].user);
      console.log(userId);
      console.log(this.usersPeers[i].user == userId);
      if (this.usersPeers[i].user == userId){
        tmp = this.usersPeers[i];
      }
    }
    if (tmp.peer) {
      tmp.peer.signal(signalObject);
    } else {
      // todo roomid
      tmp.peer = this.createPeer(stream, '0', false, userId);
      tmp.peer.signal(signalObject);
    }
  }



  public sendMessage(message: string): void {
    this.currentPeer.send(message);
  }

  public testCreateInstanceOfRTC(): void{
    const peer = new SimplePeer({ initiator: true});
  }





}
