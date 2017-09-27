var mysql      = require('mysql');

module.exports.test = function () {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test',
    port     : '3306'
  });

  connection.connect();
  console.log('connect database is success');
  connection.query('SELECT * FROM cstore', function (error, results) {
    if(error){
      console.log('[SELECT ERROR] - ',error.message);
      return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(results);
    console.log('------------------------------------------------------------\n\n');
  });
};
