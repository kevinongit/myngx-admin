import * as _ from 'lodash';
import BaseCtrl from '../base';
import UserMessage from '../../models/user-message';

export default class UserMessageHandler extends BaseCtrl {
    model = UserMessage;
    
    getData = (req, res) => {
        // console.log('inboxData : ' + JSON.stringify(inboxData));

        res.send({});
    }
}