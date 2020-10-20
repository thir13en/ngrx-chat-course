import { Application } from 'express';
import * as _ from 'lodash';

import { dbMessages, dbMessagesQueuePerUser } from '../db-data';
import { findThreadById } from '../persistence/findThreadById';
import { Message } from '../../app/shared/models';


let messageIdCounter = 20;


export function apiSaveNewMessage(app: Application): void {

  app.route('/api/threads/:id').post((req, res) => {

    const payload = req.body;

    const threadId = parseInt(req.params.id, 10);
    const participantId = parseInt(req.headers.userid![0] ?? req.headers.userid, 10);

    const message: Message = {
      id: messageIdCounter++,
      threadId,
      timestamp: new Date().getTime(),
      text: payload.text,
      participantId,
    };

    // save the new message, it's
    // already linked to a thread
    dbMessages[message.id] = message;

    const thread = findThreadById(threadId);
    thread.messageIds.push(message.id);

    const otherParticipantIds = _.keys(thread.participants).filter(id => +id !== participantId);

    otherParticipantIds.forEach(partId => {
      thread.participants[partId] += 1;
      dbMessagesQueuePerUser[participantId].push(message.id);

    });

    thread.participants[participantId] = 0;

    res.status(200).send();

  });

}


