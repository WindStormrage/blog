var express = require('express');
var router  = express.Router();
var mysql   = require('./../mysql/connect');
var unicode = require('./../api/unicode');
var fs = require('fs');


function add(data) {
  if(Number(data) < 10){
    return "0"+String(data)
  }
  return String(data)
}

router.all('/postComment', function (req, res) {
  //允许跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log(req.body);

  //获取当前时间
  var mydate = new Date();
  var moon = Number(mydate.getMonth())+1;
  var time = mydate.getFullYear()+'-'+add(moon)+'-'+add(mydate.getDate())+' '+add(mydate.getHours())+':'+add(mydate.getMinutes())+':'+add(mydate.getSeconds());

  //先找到当前最后一个
  var lastId;
  var id;
  mysql.connect('SELECT * FROM comment',function (results) {
    lastId = results.length === 0 ? 0 : results[results.length-1].id;
    lastId = lastId.toString();
    id     = Number(lastId)+1;


    fs.writeFile('./static/comment'+id+'.txt', req.body.content);

    var del     = 0;
    if(req.body.name == undefined) del = 1;
    var name    = req.body.name;
    name = unicode.toUnicode(String(name));
    var content = 'comment'+id+'.txt';
    mysql.connect("insert into comment values('"+id+"','"+name+"','"+time+"','"+content+"','"+del+"')",function(results){
      //mysql.connect("insert into comment values('10','qq','qq','qq','0')",function(results){
      res.send('66666666');
    });
  });
});

module.exports = router;
