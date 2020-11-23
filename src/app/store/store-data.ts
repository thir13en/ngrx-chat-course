import { Message, Participant, Thread } from '@shared/models';


export interface StoreData {
  user: {
    id: number;
  };
  participants: {[key: number]: Participant};
  threads: {[key: number]: Thread};
  messages: {[key: number]: Message};
}

export const INITIAL_STORE_DATA: StoreData = {
  user: {
    id: 1
  },
  messages: {},
  participants: {},
  threads: {},
};
