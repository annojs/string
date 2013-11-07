var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var split = require('../').split;


fuzz._amount = 100;
fuzz(split, function(op, sep, str) {
    // TODO: figure out a nice invariant
    var res = op(sep, str);

    return true;
});
