// @ts-ignore
const express = require('express');
const bodyParser = require('body-parser');
import { Application } from 'express';

import { apiGetUserThreads } from './api/apiGetUserThreads';
import { apiSaveNewMessage } from './api/apiSaveNewMessage';
import { apiMessageNotificationsPerUser } from './api/apiMessageNotificationsPerUser';
import { apiUpdateThread } from './api/apiMarkThreadAsReadByUser';


const app: Application = express();

app.use(bodyParser.json());


apiGetUserThreads(app);
apiSaveNewMessage(app);
apiMessageNotificationsPerUser(app);
apiUpdateThread(app);


app.listen(8090, () => console.log('Server is now running on port 8090 ...'));
