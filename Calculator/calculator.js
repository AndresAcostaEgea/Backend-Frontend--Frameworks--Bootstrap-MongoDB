const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res){
  var numOne = Number(req.body.num1);
  var numTwo = Number(req.body.num2);
  var numThree = numOne+numTwo;
  res.send("the sum of those is: " +numThree);
});

app.post("/multCalculator", function(req, res){
  var numThree = Number(req.body.num3);
  var numFour = Number(req.body.num4);
  var numFive = numThree*numFour;
  res.send("the multiplication of those is: " +numFive);
});


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("Running sever.")
})
