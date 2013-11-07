var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('fill', 'Uses given `amount` of `chr` to fill `str` beginning').
    on(is.number, is.character, is.string, function(amount, chr, str) {
        var pad = '';
        var len = amount - str.length;

        if(!chr || amount < 1 || len < 1 || len > 1000) return str;

        while(pad.length < len) {
            pad += chr;
        }

        return pad + str;
    }).
    satisfies(is.string);
