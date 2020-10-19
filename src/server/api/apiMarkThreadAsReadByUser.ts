import { Application } from 'express';
import * as _ from 'lodash';

import { dbThreads } from '../db-data';
import { Thread } from '../../app/shared/models';


export function apiUpdateThread(app: Application): void {

  app.route('/api/threads/:id').patch((req, res) => {

    const participantId = req.headers.userid;

    const threadId = req.params.id;

    const updatedProps = req.body;

    const allThreads: Thread[] = _.values(dbThreads);

    const thread = _.find(allThreads, (thrd: Thread) => thrd.id === +threadId);

    if (updatedProps.hasOwnProperty('read')) {
      thread!.participants.participantId = 0;
    }

    res.status(200).send();

  });

}
