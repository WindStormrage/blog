var mysql = require('mysql');

exports.connect = function(sql, callback) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'testblog',
    port     : '3306',
    charset  : 'UTF8_GENERAL_CI',
    typeCast: false,
  });
  connection.connect();
  console.log('connect database is success');
  connection.query(sql, function (error, results) {
    if(error){
      console.log('[SELECT ERROR] - ',error.message);
      return;
    }
    callback(results);
  });
  connection.end();
  console.log('end database is success');
}
