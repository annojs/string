var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var title = require('../').title;


fuzz._amount = 100;
fuzz(title, function(op, str) {
    var res = op(str);

    // TODO: figure out an invariant (split + examine parts?)
    return true;
});
