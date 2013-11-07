var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('upper', 'Converts given `str` to uppercase').
    on(is.string, function(str) {
        return str.toUpperCase();
    }).
    satisfies(is.string);
