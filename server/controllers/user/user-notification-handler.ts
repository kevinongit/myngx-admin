import * as _ from 'lodash';
import BaseCtrl from '../base';
import UserNotification from '../../models/user-notification';

export default class UserNotificationHandler extends BaseCtrl {
    model = UserNotification;
    
    getData = (req, res) => {
        // console.log('inboxData : ' + JSON.stringify(inboxData));

        res.send({});
    }
}