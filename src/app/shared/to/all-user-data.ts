import { Message, Participant, Thread } from '@shared/models';

export interface AllUserData {
  participants: { [key: number]: Participant };
  threads: { [key: number]: Thread };
  messages: { [key: number]: Message };
}
