var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('lower', 'Converts given `str` to lowercase').
    on(is.string, function(str) {
        return str.toLowerCase();
    }).
    satisfies(is.string);
