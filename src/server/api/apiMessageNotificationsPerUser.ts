import { Application } from 'express';

import { dbMessages, dbMessagesQueuePerUser } from '../db-data';


export function apiMessageNotificationsPerUser(app: Application): void {

  app.route('/api/notifications/messages').post((req, res) => {

    const participantId = req.headers.userid;
    if (!participantId) {
      res.status(200).json({ payload: [] });
      return;
    }
    const unreadMessageIds = dbMessagesQueuePerUser[+participantId];
    const unreadMessages = unreadMessageIds.map(messageId => dbMessages[messageId]);

    dbMessagesQueuePerUser[+participantId] = [];

    res.status(200).json({ payload: unreadMessages });

  });

}
