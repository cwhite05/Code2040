var request = require("request");

var myToken = 'gpkLixhseM';
 
var data = {
    token: myToken,
};

request({
  uri: "http://challenge.code2040.org/api/getstring",
  method: "POST",
  form: JSON.stringify(data)
}, function(error, response, body) {
	// body is given as a string instead of JSON object
	console.log(body);
	var bodyObj = JSON.parse(body); // convert string to JSON object
	var originalString = bodyObj.result; // extract original string from body object
	console.log(originalString)

	// code to reverse string
	var reversedString = '';
	for(i=originalString.length-1; i >= 0; i--){
		var reversedString = reversedString + originalString.charAt(i);
	}

	console.log(reversedString);

	data = {
		token: myToken,
		string: reversedString
	}

	request({
	  uri: "http://challenge.code2040.org/api/validatestring",
	  method: "POST",
	  form: JSON.stringify(data)
	}, function(error, response, body) {
	  console.log(body);
	});
} );