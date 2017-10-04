var express = require('express');
var router = express.Router();
var satelize = require('satelize')
const ipify = require('ipify');
 

/* GET home page. */
router.get('/', function(req, res, next) {
  ipify().then(ip => {
    satelize.satelize({ip: ip}, function(err, payload) {
      res.send(payload)
    });
  });
});

module.exports = router;
