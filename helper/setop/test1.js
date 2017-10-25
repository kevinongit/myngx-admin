// POST request : to save data.json file into MongoDB
var data = require('./data2.json');

//console.log(JSON.stringify(data));

var request = require('request');

// request({
//     url: "http://192.168.0.4:3000/api/golfclub",
//     method: "POST",
//     json: true,
//     body: data[1]
// }, function(error, response, body) {
//     console.log(response);
//     console.log("err : " + error);
// });

data.map(function(item) {
    request({
        url: "http://localhost:3000/api/golfclub",
        //url: "http://192.168.0.4:3000/api/golfclub",
        method: "POST",
        json: true,
        body: item
    }, function(error, response, body) {
        console.log(response);
        console.log("err : " + error);
    });
});
