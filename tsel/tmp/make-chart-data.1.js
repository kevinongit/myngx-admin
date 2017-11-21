const data=require('./out.json');
var _ = require('lodash');

// let dateArr = _.map(data, (item) => {
//     return item.meta_info.date;
// });

let dateArr = [];

let chartData = {};


let dailySeries = [
    {name: "Android", type: "bar", data : [] },
    {name: "IOS", type: "bar", data : [] },
    {name: "Total", type: "bar", data : [] },
];
_.map(data, (item) => {
    dateArr.push(item.meta_info.date);
    dailySeries[0].data.push(item.daily_registration.android);
    dailySeries[1].data.push(item.daily_registration.ios);
    dailySeries[2].data.push(item.daily_registration.total);
    
});

chartData = {
    dailyRegistration: {
        xAxisData: dateArr,
        series: dailySeries
    }
}

// console.log(JSON.stringify(dateArr));
// console.log(JSON.stringify(dailySeries));
console.log(JSON.stringify(chartData));