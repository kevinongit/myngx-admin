import * as _ from 'lodash';
import BaseCtrl from '../base';
import Inbox from '../../models/inbox'
// const inboxData = require('./inbox-data.json');\
import { inboxData } from './inbox-data';

export default class InboxHandler extends BaseCtrl {
    model = Inbox;
    
    getData = (req, res) => {
        // console.log('inboxData : ' + JSON.stringify(inboxData));

        res.send(inboxData);
    }
}
