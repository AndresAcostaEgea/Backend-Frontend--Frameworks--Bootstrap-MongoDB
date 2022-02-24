const https = require('https');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

  const query = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units=imperial&appid=b0d375e794180d762b68b94725044bd1#"

  https.get(url, function(request) {

    request.on('data', function(data) {
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description
      res.write("<h1>The temperature in "+query+" is: " + temperature + " degrees fahrenheit.</h1>");
      res.write("<h1>" + "The weather description is: " + weatherDescription + "</h1>");
      const img = weatherData.weather[0].icon
      const imgURL = "http://openweathermap.org/img/wn/"+img+"@2x.png"
      res.write("<img src="+ imgURL +">");
      res.send();
    });

  });
});



app.listen(3000, function() {
  console.log("server running on port 3000.");
});
