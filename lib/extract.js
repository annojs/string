var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('extract', 'Extracts the part of `str` between `start` and `end`').
    on(is.string, is.string, is.string, extract).
    on(is.string, is.string, function(str, start) {
        return extract(str, start);
    }).
    satisfies(is.string);

function extract(str, start, end) {
    var s = str.split(start)[1];

    if(!is.defined(s)) return '';

    return s.trim().split(end)[0].trim();
}

