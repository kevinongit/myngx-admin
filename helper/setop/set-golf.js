
var data = require('./data.json');

//console.log(JSON.stringify(data));

var res = data.map(function(item) {
	var val = {};
	val.name = item.name;
	val.uid = item.uid;
	val.area = item.area;
	val.homepage = "";
	val.dcfee_urls = [""];
	//val["name"] = item.name;
	//val["uid"] = item.uid;
	//val["area"] = item.area;
	return val;
	//return item["name"], item["uid"], item["area"];
	//return item.name, item.uid;
});

console.log(JSON.stringify(res));
