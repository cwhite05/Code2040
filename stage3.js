var request = require("request");

var myToken = 'gpkLixhseM';
 
var data = {
    token: myToken,
};

request({
  uri: "http://challenge.code2040.org/api/prefix",
  method: "POST",
  form: JSON.stringify(data)
}, function(error, response, body) {
	// body is given as a string instead of JSON object
	console.log(body);
	var bodyObj = JSON.parse(body); // convert string to JSON object
	var prefix = bodyObj.result.prefix.toString();
	var array = bodyObj.result.array; // extract original string from body object
	//console.log(originalString)

console.log(prefix)
console.log(array)
	
	
	var newArray = [];
	for( var i=0; i < array.length ; i++){
		if(array[i].indexOf(prefix) != 0) {
			newArray.push(array[i]);
		}
	}

	console.log(newArray);

	data = {
		token: myToken,
		array: newArray
	}

	request({
	  uri: "http://challenge.code2040.org/api/validateprefix",
	  method: "POST",
	  form: JSON.stringify(data)
	}, function(error, response, body) {
	  console.log(body);
	});
} );