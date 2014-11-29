var request = require("request");

var myToken = 'gpkLixhseM';
 
var data = {
    token: myToken,
};

function addInterval(dateStampIn, intervalIn) {
			var date = new Date(dateStampIn);
			date.setSeconds(date.getSeconds() + intervalIn);
			return date.toISOString();
}

request({
  uri: "http://challenge.code2040.org/api/time",
  method: "POST",
  form: JSON.stringify(data)
}, function(error, response, body) {
	// body is given as a string instead of JSON object
	console.log(body);
	var bodyObj = JSON.parse(body); // convert string to JSON object
	var datestamp = bodyObj.result.datestamp;
	var interval = bodyObj.result.interval; 
	var newDate = addInterval(datestamp,interval);

	console.log(newDate);

	data = {
		token: myToken,
		datestamp: newDate 
	}

	request({
	  uri: "http://challenge.code2040.org/api/validatetime",
	  method: "POST",
	  form: JSON.stringify(data)
	}, function(error, response, body) {
	  console.log(body);
	});
} );