const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res){
  res.send("<h1>Hello</h1>");
});

app.get("/about", function(req, res){
  res.send("This is the about Andres page.");
});

app.get("/contact", function(req, res){
  res.send("To contact Andres send an email to emailandres1988@gmail.com");
});

app.get("/hobbies", function(req, res){
  res.send("execise, happiness");
});

app.listen(3000, function(){
  console.log("The server is running at port 3000.")
});
