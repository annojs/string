var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var rtrim = require('../').rtrim;


fuzz._amount = 100;
fuzz(rtrim, function(op, chars, str) {
    // TODO: figure out how to deal with invalid regex
    var res = op(' ', str);

    return res? res: true;
});
