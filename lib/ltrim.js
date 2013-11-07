var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('ltrim', 'Trims using given `chars` from the left side of `str`').
    on(is.string, is.string, function(chars, str) {
        // http://phpjs.org/functions/ltrim:467
        chars = !chars? ' \\s\u00A0': (chars + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
        var re = new RegExp('^[' + chars + ']+', 'g');

        return (str + '').replace(re, '');
    }).
    satisfies(is.string);
