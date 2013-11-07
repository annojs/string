var annotate = require('annotate');
var is = require('annois');

var rtrim = require('./rtrim');
var ltrim = require('./ltrim');


module.exports = annotate('trim', 'Trims given `chars` from both ends of given `str`').
    on(is.string, is.string, function(chars, str) {
        return ltrim(chars, rtrim(chars, str));
    }).
    satisfies(is.string);
