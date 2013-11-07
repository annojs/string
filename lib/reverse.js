var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('reverse', 'Reverses the order of the given `str`').
    on(is.string, function(str) {
        return str.split('').reverse().join('');
    }).
    satisfies(is.string);
