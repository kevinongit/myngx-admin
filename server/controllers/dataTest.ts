
import { data1, INBOX_LIST } from './data1';

// const data2 = require('./data1');

export default class DataTest {
    
    getData = (req, res) => {
        console.log('data = ' + data1);
        res.send(data1);
    }

    getInboxList = (req, res) => {
        console.log('INBOX_LIST = ' + INBOX_LIST);
        res.send(INBOX_LIST);
    }
}