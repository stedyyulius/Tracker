var express = require('express');
var router = express.Router();
var satelize = require('satelize')
const ipify = require('ipify');
var iplocation = require('iplocation')


/* GET home page. */
router.get('/', function(req, res, next) {
  iplocation('175.158.49.108', function (error, response) {
    res.send(response)
  })
});

module.exports = router;
