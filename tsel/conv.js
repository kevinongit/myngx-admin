
var _ = require('lodash');

var fs = require('fs');

function getJsonFromFile(file) { 
    var data = fs.readFileSync(file).toString().split('\n');

    return extract(data);
}



function extract(arr) {
    var res = {};

    res.meta_info = {};

    for (i=0; i <  arr.length; i++) {
        if (_.includes(arr[i], "DAILY REGISTRATION")) {
            res.daily_registration = {};
            res.daily_registration.ios = arr[i+3].split(/\s+/)[1];
            res.daily_registration.android = arr[i+4].split(/\s+/)[1];
            res.daily_registration.total = arr[i+5].split(/\s+/)[1];
            // console.log("arr : " + arr[i+3] + ", ios : " + res.daily_registration.ios);
        } else if (_.includes(arr[i], "ACCUMULATED REGISTRATIONS")) {
            res.accumulated_registrations = {};
            res.accumulated_registrations.ios = arr[i+3].split(/\s+/)[1];
            res.accumulated_registrations.android = arr[i+4].split(/\s+/)[1];
            res.accumulated_registrations.total = arr[i+5].split(/\s+/)[1];
        } else if (_.includes(arr[i], "AIRTIME UNIQUE USER OVER 50k")) {
            res.airtime_unique_user_over_50k = {};
            res.airtime_unique_user_over_50k.android = arr[i+3].split(/\s+/)[2];
            res.airtime_unique_user_over_50k.ios = arr[i+4].split(/\s+/)[2];
            res.airtime_unique_user_over_50k.total = (parseInt(res.airtime_unique_user_over_50k.ios) + parseInt(res.airtime_unique_user_over_50k.android)).toString();
        } else if (_.includes(arr[i], "AIRTIME UNIQUE USER")) { // be cautious for order with 50k
            res.airtime_unique_user = {};
            res.airtime_unique_user.android = arr[i+3].split(/\s+/)[2];
            res.airtime_unique_user.ios = arr[i+4].split(/\s+/)[2];
            res.airtime_unique_user.total = (parseInt(res.airtime_unique_user.ios) + parseInt(res.airtime_unique_user.android)).toString();
        } else if (_.includes(arr[i], "DAILY ELECTRICITY USERS, TRANSACTION")) {
            res.daily_electricity_users = {};
            res.daily_electricity_users.ios = {};
            res.daily_electricity_users.android = {};

            let tmp = arr[i+3].split(/\s+/);

            res.meta_info.date = tmp[0];

            res.daily_electricity_users.android.users = tmp[2];
            res.daily_electricity_users.android.transactions = tmp[3];
            tmp = arr[i+4].split(/\s+/);
            res.daily_electricity_users.ios.users = tmp[2];
            res.daily_electricity_users.ios.transactions = tmp[3];
        } else if (_.includes(arr[i], "AIRTIME TRX COUNT BY DENOM")) {
            res.airtime_transaction_count_by_denom = {};
            res.airtime_transaction_count_by_denom.ios = {};
            res.airtime_transaction_count_by_denom.android = {};

            let j;
            for (j=3; j < 12; j++) {
                let tmp = arr[i+j].split(/\s+/);
                res.airtime_transaction_count_by_denom.android[tmp[2]] = tmp[3];
            }
            for (; j < 20; j++) {
                let tmp = arr[i+j].split(/\s+/);
                res.airtime_transaction_count_by_denom.ios[tmp[2]] = tmp[3];
            }
        }
    }

    
    return res;
}

function getReports(dir) {
    let files = fs.readdirSync(dir);
    let list = [];
    console.log('files : ' + files.length);
    for (i in files) {
        res = getJsonFromFile(dir + "/" + files[i]);
        list.push(res);
    }
    return list;
}



function getDailyRegistration(list) {
    
    let dailyRegistration = _.map(list, (item) => {
        return { "date" : item.meta_info.date, 
                "daily_registration": _.map( _.toPairs(item.daily_registration),  i => _.fromPairs([i])) };
    });


    console.log(JSON.stringify(dailyRegistration));
    return dailyRegistration;
}





function makeChartData(data) {
    
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
    // console.log(JSON.stringify(chartData));
    return chartData;

}

function main() {
    const dir = "./reports";

    // convert raw report files to json
    var list = getReports(dir);
    var chartData = makeChartData(list);

    
    console.log("JSON : " + JSON.stringify(chartData));
}

main();
