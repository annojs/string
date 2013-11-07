var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var capitalize = require('../').capitalize;


// TODO: it would be nice to fuzz this with string containing only characters
// in that case it is possible to verify the upper/lowercase behavior
fuzz._amount = 100;
fuzz(capitalize, function(op, str) {
    if(str) {
        var res = op(str);
        return is.upperCharacter(res[0]) || res[0] == str[0];
    }

    return true;
});
