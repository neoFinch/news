// var init = require('./config/init')();
// var config = require('./config/config');

// var app = require('./config/express')();

// app.listen(config.port);
// console.log('Node server started on port ' + config.port + '.');

var express = require("express");
var app = express();
// var routes = require("./routes/newsRoutes");
var request = require("request");
var mongoose = require("mongoose");
// var News = require("./models/newsModel");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(routes);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/news");

app.listen(3000);

// app.get("/api/news", function(req, res) {
//   //   console.log("called");
// setInterval(function() {
//   console.log("called");
request.get(
  {
    url:
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=e18aa9575f5c4ee299f5b9abfdc4df32"
  },
  function(error, response, body) {
    console.log(body)
    // if (!error && response.statusCode == 200) {
    //   var myData = new News(JSON.parse(body));
    //   myData
    //     .save()
    //     .then(item => {
    //       // res.send("item saved to database");
    //       console.log("item : ", item);
    //     })
    //     .catch(err => {
    //       // res.status(400).send("unable to save to database");
    //     });
    // }
  }
);
// }, 600000);
// });
