var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var trim = require('../').trim;


fuzz._amount = 100;
fuzz(trim, function(op, chars, str) {
    var res = op(' ', str);

    // TODO: figure out a nice invariant
    return true;
});
