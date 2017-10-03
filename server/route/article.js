var express = require('express');
var router  = express.Router();
var mysql   = require('./../mysql/connect');
var unicode = require('./../api/unicode');
var fs = require('fs');

var data  = {};
var data1 = [];
var data2 = [];

mysql.connect('SELECT * FROM article',function (results) {
  for(var i = 0; i < results.length; i++){
    data = {};
    if(results[i].type == 1){
      data.id         = results[i].id;
      data.title      = unicode.toWord(results[i].title);
      data.date       = results[i].date;
      data.name       = unicode.toWord(results[i].name);
      data.ps         = unicode.toWord(results[i].ps);
      data.text       = fs.readFileSync('./static/'+results[i].text, 'utf8');
      data.reading    = results[i].reading;
      data.agree      = results[i].agree;
      data.delete     = results[i].delete;
      data.exhibition = results[i].exhibition;
      data.type       = results[i].type;
      data1.push(data);
    }
    if(results[i].type == 2){
      data.id         = results[i].id;
      data.title      = unicode.toWord(results[i].title);
      data.date       = results[i].date;
      data.name       = unicode.toWord(results[i].name);
      data.ps         = unicode.toWord(results[i].ps);
      data.text       = fs.readFileSync('./static/'+results[i].text, 'utf8');
      data.reading    = results[i].reading;
      data.agree      = results[i].agree;
      data.delete     = results[i].delete;
      data.exhibition = results[i].exhibition;
      data.type       = results[i].type;
      data2.push(data);
    }
  }
});

router.get('/article', function (req, res) {
  //允许跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log(data1);
  console.log(data2);
   if (req.query.id == 1){
     res.send(data1);
   }
   if (req.query.id == 2){
    res.send(data2);
   }
});

module.exports = router;
