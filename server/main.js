var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//mysql-test
// var mysql = require('./mysql/connect');
// mysql.connect('SELECT * FROM conf',function (results) {
//   console.log(results);
// });
// var conf    = require('./mysql/conf');
// conf.data();


//route
var index = require('./route/index');
var article = require('./route/article');

app.use('/', index);
app.use('/', article);

//设置静态文件目录
app.use(express.static('static'));

var server = app.listen(3000);
