var request = require("request");

var myToken = 'gpkLixhseM';
 
var data = {
    token: myToken,
};

request({
  uri: "http://challenge.code2040.org/api/haystack",
  method: "POST",
  form: JSON.stringify(data)
}, function(error, response, body) {
	// body is given as a string instead of JSON object
	console.log(body);
	var bodyObj = JSON.parse(body); // convert string to JSON object
	var haystack = bodyObj.result.haystack;
	var string = bodyObj.result.needle; // extract original string from body object


	var needle = haystack.indexOf(string);

	console.log(needle);

	data = {
		token: myToken,
		needle: needle
	}

	request({
	  uri: "http://challenge.code2040.org/api/validateneedle",
	  method: "POST",
	  form: JSON.stringify(data)
	}, function(error, response, body) {
	  console.log(body);
	});
} );