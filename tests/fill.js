var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var fill = require('../').fill;


fuzz._amount = 100;
fuzz(fill, function(op, amount, chr, str) {
    var res = op(amount, chr, str);

    // TODO: figure out an invariant
    return true;
});
