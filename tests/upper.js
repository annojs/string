var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var upper = require('../').upper;


fuzz._amount = 100;
fuzz(upper, function(op, str) {
    return str? op(str): true;
});
