import * as _ from 'lodash';

import { Thread } from '../../app/shared/models';
import { dbThreads } from '../db-data';


export function findThreadById(threadId: number): Thread | undefined {

  const threads: Thread[] = _.values(dbThreads);

  return _.find(threads, thread => thread.id === threadId);
}
