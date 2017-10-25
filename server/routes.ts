import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import MovieCtrl from './controllers/movie';
import GolfclubCtrl from './controllers/golfclub';
import DataTest from './controllers/dataTest';
import InboxHandler from './controllers/inbox/inbox-handler';
import EngphraseHandler from './controllers/engphrase/engphrase-handler'
import UserMessageHandler from './controllers/user/user-message-handler'
import UserNotificationHandler from './controllers/user/user-notification-handler'

import Cat from './models/cat';
import User from './models/user';


export default function setRoutes(app) {

  const dataTest = new DataTest();
  const inboxHandler = new InboxHandler();
  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const movieCtrl = new MovieCtrl();
  const golfclubCtrl = new GolfclubCtrl();
  const engphraseHandler = new EngphraseHandler();
  const usermessageHandler = new UserMessageHandler();
  const usernotificationHandler = new UserNotificationHandler();

  // for test
  app.route('/api/test/').get(dataTest.getData);


  // Inbox
  app.route('/api/inboxes').get(inboxHandler.getAll);
  app.route('/api/inboxes2').get(inboxHandler.getData);
  app.route('/api/inbox').post(inboxHandler.insert);

  // Engphrase
  app.route('/api/engphrases/').get(engphraseHandler.getAll);
  app.route('/api/engphrases2/:num').get(engphraseHandler.getSome);
  app.route('/api/engphrases/count').get(engphraseHandler.count);
  app.route('/api/engphrase').post(engphraseHandler.insert);
  app.route('/api/engphrase/:id').get(engphraseHandler.get);
  app.route('/api/engphrase/:id').put(engphraseHandler.update);
  app.route('/api/engphrase/:id').delete(engphraseHandler.delete);

  // UserMesage
  app.route('/api/usermessages').get(usermessageHandler.getAll);
  app.route('/api/usermessages/count').get(usermessageHandler.count);
  app.route('/api/usermessage').post(usermessageHandler.insert);
  app.route('/api/usermessage/:id').get(usermessageHandler.get);
  app.route('/api/usermessage/:id').put(usermessageHandler.update);
  app.route('/api/usermessage/:id').delete(usermessageHandler.delete);

  // UserNotification
  app.route('/api/usernotifications').get(usernotificationHandler.getAll);
  app.route('/api/usernotifications/count').get(usernotificationHandler.count);
  app.route('/api/usernotification').post(usernotificationHandler.insert);
  app.route('/api/usernotification/:id').get(usernotificationHandler.get);
  app.route('/api/usernotification/:id').put(usernotificationHandler.update);
  app.route('/api/usernotification/:id').delete(usernotificationHandler.delete);

  // Cats
  app.route('/api/cats').get(catCtrl.getAll);
  app.route('/api/cats/count').get(catCtrl.count);
  app.route('/api/cat').post(catCtrl.insert);
  app.route('/api/cat/:id').get(catCtrl.get);
  app.route('/api/cat/:id').put(catCtrl.update);
  app.route('/api/cat/:id').delete(catCtrl.delete);

  // Users
  app.route('/api/login').post(userCtrl.login);
  app.route('/api/users').get(userCtrl.getAll);
  app.route('/api/users/count').get(userCtrl.count);
  app.route('/api/user').post(userCtrl.insert);
  app.route('/api/user/:id').get(userCtrl.get);
  app.route('/api/user/:id').put(userCtrl.update);
  app.route('/api/user/:id').delete(userCtrl.delete);

  // movie
  app.route('/api/movie').get(movieCtrl.getAll);
  app.route('/api/movie/:id').get(movieCtrl.getOneMovie);

  // Golfclubs
  app.route('/api/golfclubs').get(golfclubCtrl.getGolfclubList);
  app.route('/api/golfclubs/count').get(golfclubCtrl.count);
  app.route('/api/golfclubs/getfee').get(golfclubCtrl.getFee);
  app.route('/api/golfclub').post(golfclubCtrl.insert);
  app.route('/api/golfclub/:id').get(golfclubCtrl.getById);
  app.route('/api/golfclub/:id').put(golfclubCtrl.update);
  app.route('/api/golfclub/:id').delete(golfclubCtrl.delete);
}
