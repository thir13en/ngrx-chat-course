import { Application, Request, Response } from 'express';
import * as _ from 'lodash';

import { ERRORS } from '../core';
import { Message } from '../../app/shared/models';
import { AllUserData } from '../../app/shared/to';
import { findDbThreadsPerUser } from '../persistence/findDbThreadsPerUser';
import { dbMessages, dbParticipants, dbThreads } from '../db-data';


export function apiGetUserThreads(app: Application): void {

  app.route('/api/threads').get((req: Request, res: Response) => {

    const participantId = +req.headers.userid!;

    if (!participantId) {
      res.status(404).json(ERRORS.MISSING_PART_ID);
    }

    const threadsPerUser = findDbThreadsPerUser(participantId);

    let messages: Message[] = [];
    let participantIds: string[] = [];
    const threads = Object.values(dbThreads);

    threadsPerUser.forEach(thread => {
      const threadMessages: Message[] = _.filter(dbMessages, (message) => message.threadId === thread.id);

      messages = messages.concat(threadMessages);

      participantIds = participantIds.concat(_.keys(thread.participants));

    });

    const participants = _.uniq(participantIds.map(partId => dbParticipants[+partId]));

    const response: AllUserData = {
      participants,
      messages,
      threads,
    };

    res.status(200).json({ response });

  });


}
