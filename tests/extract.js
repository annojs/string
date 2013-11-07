var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var extract = require('../').extract;


fuzz._amount = 100;
fuzz(extract, function(op, str, start, end) {
    var res = op(str, start, end);

    // TODO: figure out a nice invariant
    return true;
});
