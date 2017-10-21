import * as _ from 'lodash';
import BaseCtrl from '../base';
import Engphrase from '../../models/engphrase';

export default class EngphraseHandler extends BaseCtrl {
    model = Engphrase;

    getSome = (req, res) => {
        if (req.params.num) {
            console.log('req.params.num = ' + req.params.num);
        }
        this.model.find({}, (err, docs) => {
            if (err) { return console.error(err); }
            
            let list = this.getRandomPhraseArray(docs, req.params.num);
            console.log('list = ' + JSON.stringify(list));
            res.json(list);
        });
    }

    getData = (req, res) => {
        // console.log('inboxData : ' + JSON.stringify(inboxData));

        res.send({});
    }


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getRandomIntArray(min, max, n) {
        let list = [];
        const MAX_LOOP = 100;
        console.log('min, max, n = ' + min + ', ' + max + ',' + n);
        for (var i = 0, collected = 0; i < MAX_LOOP; i++) {
            var num = this.getRandomInt(min, max);
            // console.log('num = ' + num + ', collected = ' + collected + ', n = ' + n);
            if (list.indexOf(num) < 0) {
                list[collected++] = num;
                // console.log('++ num = ' + num + ', collected = ' + collected + ', n = ' + n);
                if (collected == n) break;
            }
        }
        console.log('collected : ' + collected);
        return list;
    }

    getRandomPhraseArray(phrases, num) {
        let list = [];
        let indexes = this.getRandomIntArray(0, phrases.length, num)
        console.log('indexes : ' + indexes);
        for (var i = 0; i < indexes.length; i++) {
            list.push(phrases[indexes[i]]);
        }
        console.log('list.length : ' + list.length);
        return list;
    }
}