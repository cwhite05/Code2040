var request = require("request");
 
var data = {
    email: "cwhite05@stanford.edu",
    github: "https://github.com/cwhite05/Code2040.git"
};
 
data = JSON.stringify(data);
 
request({
  uri: "http://challenge.code2040.org/api/register",
  method: "POST",
  form: data
}, function(error, response, body) {
  console.log(body);
});