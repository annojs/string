var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var ltrim = require('../').ltrim;


fuzz._amount = 100;
fuzz(ltrim, function(op, chars, str) {
    // TODO: figure out how to deal with invalid regex
    var res = op(' ', str);

    return res? res: true;
});
