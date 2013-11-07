var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('atoi', 'Converts given ASCII `chr` to a character code').
    on(is.character, function(chr) {
        return chr.charCodeAt();
    }).
    satisfies(is.number);
