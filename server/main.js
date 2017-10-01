var express = require('express');
var app = express();

//mysql-test
// var mysql = require('./mysql/connect');
// mysql.connect('SELECT * FROM conf',function (results) {
//   console.log(results);
// });
// var conf    = require('./mysql/conf');
// conf.data();


//route
var index = require('./route/index');

app.use('/test', index);
app.use(express.static('static'));

var server = app.listen(3000);
