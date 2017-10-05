var express = require('express');
var router = express.Router();
var satelize = require('satelize')
const ipify = require('ipify');
var iplocation = require('iplocation')


/* GET home page. */
router.get('/', function(req, res, next) {
  iplocation('174.138.26.249', function (error, response) {
    res.send(response)
  })
});

module.exports = router;
