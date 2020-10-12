import { Message, Participant, Thread } from '@shared/models';

export interface AllUserData {
  participants: Participant[];
  threads: Thread[];
  messages: Message[];
}
