var express = require('express');
var app = express();

//mysql-test
var sql = require('./mysql/connect');
sql.test();

//route
var index = require('./route/index');

app.use('/test', index);
app.use(express.static('static'));

var server = app.listen(3000);
