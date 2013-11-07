var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('rtrim', 'Trims using given `chars` from the right side of `str`').
    on(is.string, is.string, function(chars, str) {
        // http://phpjs.org/functions/rtrim:507
        chars = !chars? ' \\s\u00A0': (chars + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
        var re = new RegExp('[' + chars + ']+$', 'g');

        return (str + '').replace(re, '');
    }).
    satisfies(is.string);
