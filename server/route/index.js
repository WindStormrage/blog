var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  //允许跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send({url:"http://localhost:3000/001.png"});
});

module.exports = router;
