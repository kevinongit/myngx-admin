import * as _ from 'lodash';

// const inboxData = require('./inbox-data.json');\
import { inboxData } from './inbox-data';

export default class InboxHandler {
    
    getData = (req, res) => {
        // console.log('inboxData : ' + JSON.stringify(inboxData));

        res.send(inboxData);
    }
}