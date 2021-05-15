export interface PeerData {
  id: string;
  target: string;
  data: any;
}

export interface UserInfo {
  userName: string;
  connectionId: string;
}

export interface SignalInfo {
  user: string;
  target: string;
  signal: any;
}

export interface ChatMessage {
  own: boolean;
  message: string;
}
