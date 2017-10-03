var express = require('express');
var router  = express.Router();
var mysql   = require('./../mysql/connect');
var unicode = require('./../api/unicode');

var data = {};

mysql.connect('SELECT * FROM conf',function (results) {
  data.header  = "http://localhost:3000/"+unicode.toWord(results[0].header);
  data.banner  = "http://localhost:3000/"+unicode.toWord(results[0].banner);
  data.logo  = "http://localhost:3000/"+unicode.toWord(results[0].logo);
  data.name = unicode.toWord(results[0].name);
  data.msg = unicode.toWord(results[0].msg);
});

router.get('/index', function (req, res) {
  //允许跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send(data);
});

module.exports = router;
