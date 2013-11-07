var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var lower = require('../').lower;


fuzz._amount = 100;
fuzz(lower, function(op, str) {
    if(str) return op(str);

    return str;
});
