var express = require('express');
var router  = express.Router();
var mysql   = require('./../mysql/connect');
var unicode = require('./../api/unicode');
var fs = require('fs');



router.get('/article', function (req, res) {
  //允许跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  var data  = {};
  var data1 = [];//自己文章
  var data2 = [];//别人文字
  var data3 = [];//首页展示

  mysql.connect('SELECT * FROM article',function (results) {
    var type1=-1, type2=-1;//每一种类型当前的数量
    for(var i = 0; i < results.length; i++){
      data = {};
      if(results[i].delete == 1){
        continue;
      }
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
        type1++;
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
        type2++;
        data2.push(data);
      }
      if(results[i].exhibition == 1){
        if(data.type == 1){
          data.typeId = type1;
          data.type = 1;
        }else if(data.type == 2){
          data.typeId = type2;
          data.type = 2;
        }
        data3.push(data);
      }
    }



    if (req.query.id == 1){
      res.send(data1);
    }
    if (req.query.id == 2){
      res.send(data2);
    }
    if (req.query.id == 3){
      res.send(data3);
    }


  });

  //console.log(data1);
  //console.log(data2);
});

module.exports = router;
