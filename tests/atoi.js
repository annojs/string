var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var atoi = require('../').atoi;


fuzz._amount = 100;
fuzz(atoi, function(op, chr) {
    return op(chr);
});
