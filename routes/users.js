var express = require('express');
var router = express.Router();
var {appName} = require("../submodules/lib/constants/applicationName");

/* GET users listing. */
router.get('/', function(req, res) {
  console.log(appName);
  res.send(appName);
});

module.exports = router;
