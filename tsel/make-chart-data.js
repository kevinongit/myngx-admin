const data=require('./out.json');
const _ = require('lodash');

let chartData = {
    dailyRegistration: {
        xAxisData: [],
        series: [
            {name: "Android", type: "bar", data : [] },
            {name: "IOS", type: "bar", data : [] },
            {name: "Total", type: "bar", data : [] }
        ]
    },
    accumulatedRegistration: {
        xAxisData: [],
        series: [
            {name: "Android", type: "bar", data : [] },
            {name: "IOS", type: "bar", data : [] },
            {name: "Total", type: "bar", data : [] }
        ]
    },
    airtimeUniqueUser: {
        xAxisData: [],
        series: [
            {name: "Android", type: "bar", data : [] },
            {name: "IOS", type: "bar", data : [] },
            {name: "Total", type: "bar", data : [] }
        ]
    },
    airtimeUniqueUserOver50k: {
        xAxisData: [],
        series: [
            {name: "Android", type: "bar", data : [] },
            {name: "IOS", type: "bar", data : [] },
            {name: "Total", type: "bar", data : [] }
        ]
    },
};

_.map(data, (item) => {
    //daily registration
    chartData.dailyRegistration.xAxisData.push(item.meta_info.date);
    chartData.dailyRegistration.series[0].data.push(item.daily_registration.android);
    chartData.dailyRegistration.series[1].data.push(item.daily_registration.ios);
    chartData.dailyRegistration.series[2].data.push(item.daily_registration.total);
    //accumulated registration
    chartData.accumulatedRegistration.xAxisData.push(item.meta_info.date);
    chartData.accumulatedRegistration.series[0].data.push(item.accumulated_registrations.android);
    chartData.accumulatedRegistration.series[1].data.push(item.accumulated_registrations.ios);
    chartData.accumulatedRegistration.series[2].data.push(item.accumulated_registrations.total);
    //airtime unique user
    chartData.airtimeUniqueUser.xAxisData.push(item.meta_info.date);
    chartData.airtimeUniqueUser.series[0].data.push(item.airtime_unique_user.android);
    chartData.airtimeUniqueUser.series[1].data.push(item.airtime_unique_user.ios);
    chartData.airtimeUniqueUser.series[2].data.push(item.airtime_unique_user.total);
    //airtime unique user over 50k
    chartData.airtimeUniqueUserOver50k.xAxisData.push(item.meta_info.date);
    chartData.airtimeUniqueUserOver50k.series[0].data.push(item.airtime_unique_user_over_50k.android);
    chartData.airtimeUniqueUserOver50k.series[1].data.push(item.airtime_unique_user_over_50k.ios);
    chartData.airtimeUniqueUserOver50k.series[2].data.push(item.airtime_unique_user_over_50k.total);
});


console.log(JSON.stringify(chartData));