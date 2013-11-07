var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('split', 'Uses `sep` to split `str`').
    on(is.string, is.string, function(sep, str) {
        return str.split(sep);
    }).
    satisfies(is.array);
