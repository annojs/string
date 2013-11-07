var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('partition', 'Uses given `chr` to partition given `str`').
    on(is.string, is.string, function(chr, str) {
        var parts = str.split(chr);

        var lPart = parts.shift();
        var rPart = parts.join(chr);

        return rPart? [lPart, rPart]: [lPart];
    }).
    satisfies(is.array);
