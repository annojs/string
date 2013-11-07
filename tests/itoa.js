var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var itoa = require('../').itoa;


fuzz._amount = 100;
fuzz(itoa, function(op, number) {
    return op(number);
});
