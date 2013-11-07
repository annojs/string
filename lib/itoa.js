var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('itoa', 'Converts given ASCII `code` to a character').
    on(is.number, function(code) {
        return String.fromCharCode(code);
    }).
    satisfies(is.character);
