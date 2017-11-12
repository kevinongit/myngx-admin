
var _ = require('lodash');

var fs = require('fs');

function getJsonFromFile(file) { 
    var data = fs.readFileSync(file).toString().split('\n');

    return extract(data);
}

var list;

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

function getReports() {
    const dir = './reports';
    let files = fs.readdirSync(dir);
    let list = [];
console.log('files : ' + files.length);
    for (i in files) {
        res = getJsonFromFile(dir + "/" + files[i]);
        list.push(res);
    }
    return list;
}

list = getReports();

console.log("JSON : " + JSON.stringify(list));








// const keywords = ["DAILY REGISTRATION",
//                 "ACCUMULATED REGISTRATIONS",
//                 "AIRTIME UNIQUE USER",
//                 "AIRTIME UNIQUE USER OVER 50k",
//                 "AIRTIME TRX COUNT BY DENOM",
//                 "DAILY ELECTRICITY USERS, TRANSACTION"
// ];

// const parseVal = () => {

// }

// const c1 = _.includes(keywords, "KKK");
// const c2 = _.includes(keywords, "AAAA");
// const c3 = _.includes(keywords, "BB");

// console.log("c1 = " + c1 + ", c2 = " + c2 + ", c3 = " + c3);

// const through2 = require('through2');
// const split = require('split2');

// const stream = fs.createReadStream('20171110.report')
// .pipe(split())
// .pipe(process.stdout);


