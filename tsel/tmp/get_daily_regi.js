
const data=require('./out.json');

var _ = require('lodash');

let dailyRegistration = _.map(data, (item) => {
    return { "date" : item.meta_info.date, 
            "daily_registration": _.map( _.toPairs(item.daily_registration),  i => _.fromPairs([i])) };
});

console.log(JSON.stringify(dailyRegistration));