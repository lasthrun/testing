var express = require('express');
var router = express.Router();
var {appName} = require("../submodules/lib/constants/applicationName");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: appName });
});

module.exports = router;
