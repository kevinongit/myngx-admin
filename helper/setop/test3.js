
var data = require('./data.json');
var uid = require('./uid.json');
//console.log(JSON.stringify(data));

for (var i=0; i < data.length; i++) {
	Object.assign(data[i], uid[i]);
}

res = data;

console.log(JSON.stringify(res));
