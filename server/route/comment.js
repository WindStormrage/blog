var express = require('express');
var router  = express.Router();
var mysql   = require('./../mysql/connect');
var unicode = require('./../api/unicode');
var fs = require('fs');





router.get('/comment', function (req, res) {
  //允许跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  var data =  {};
  var data1 = [];
  mysql.connect('SELECT * FROM comment',function (results) {
    for(var i = 0; i < results.length; i++){
      data = {};
      if(results[i].delete == 1){
        continue;
      }
      data.id         = results[i].id;
      data.name       = unicode.toWord(results[i].name);
      data.time       = results[i].time;
      data.content    = fs.readFileSync('./static/'+results[i].content, 'utf8');
      data1.push(data);
    }

    res.send(data1);
  });


});

module.exports = router;
