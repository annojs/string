var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('capitalize', 'Capitalizes the first character of the given `str`').
    on(is.string, function(str) {
        if(str.length) return str[0].toUpperCase() + str.slice(1).toLowerCase();

        return str;
    }).
    satisfies(is.string);
