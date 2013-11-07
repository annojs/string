var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var reverse = require('../').reverse;


fuzz._amount = 100;
fuzz(reverse, function(op, str) {
    return str? op(str): true;
});
