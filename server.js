var express = require("express");
var app = express();
var routes = require("./server/routes/newsRoutes");
var request = require("request");
var mongoose = require("mongoose");
var newsModel = require("./server/models/newsModel");
var newsController = require("./server/controllers/newsController");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/news");

app.listen(3000);

request.get(
  {
    url:
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=e18aa9575f5c4ee299f5b9abfdc4df32"
  },
  function(error, response, body) {
    console.log(body)
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      data.articles.map(item => { 
        var news = new newsModel({
        title : item.title,
        description : item.description,
        image : item.urlToImage,
        url : item.url,
        content : item.content

          });

          news.save(function (err, res) {
              if (err) {
                  console.log('err', err)
              }
              console.log('res',res)
          });
      })
     
    }
  }
);

app.use("/api/news",routes);
