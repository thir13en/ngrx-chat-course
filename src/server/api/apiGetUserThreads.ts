import { Application, Request, Response } from 'express';
import * as _ from 'lodash';

import { Message } from '@shared/models';
import { findDbThreadsPerUser } from '../persistence/findDbThreadsPerUser';
import { dbMessages, dbParticipants } from '../db-data';
import { AllUserData } from '@shared/to';

export function apiGetUserThreads(app: Application): void {

  app.route('/api/threads').get((req: Request, res: Response) => {

    const participantId = parseInt((req.headers.userid as string), 10);

    const threadsPerUser = findDbThreadsPerUser(participantId);

    let messages: Message[] = [];
    let participantIds: string[] = [];

    threadsPerUser.forEach(thread => {
      const threadMessages: Message[] = _.filter(dbMessages, (message) => message.threadId === thread.id);

      messages = messages.concat(threadMessages);

      participantIds = participantIds.concat(_.keys(thread.participants));

    });

    const participants = _.uniq(participantIds.map(partId => dbParticipants[+partId]));

    const response: AllUserData = {
      participants,
      messages,
      threads: threadsPerUser,
    };

    res.status(200).json(response);

  });


}
