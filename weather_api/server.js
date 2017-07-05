var request = require("request");

request("http://api.openweathermap.org/data/2.5/weather?q=Newyork&units=imperial&appid=ce5c4eb0c92db8a7d052f9a78a577170", 
function(error, response, body) {
  if(error)
  {
	  console.log(error);
  }
  else{
  console.log(body);
  }
  });