const request = require('request-promise')  

const options = {  
  method: 'GET',
  uri: 'http://api.openweathermap.org/data/2.5/weather',
  qs: {
    q: 'London',
    units: 'imperial',
    appid: 'ce5c4eb0c92db8a7d052f9a78a577170'
  },
  json: true
}

request(options)  
  .then(function (response) {
   console.log(response);
    // Request was successful, use the response object at will
  })
  .catch(function (err) {
    // Something bad happened, handle the error
	console.log(error);
  })