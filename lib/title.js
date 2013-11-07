var annotate = require('annotate');
var is = require('annois');
var capitalize = require('./capitalize');


module.exports = annotate('title', 'Returns `str` in title format').
    on(is.string, function(str) {
        return str.split(' ').map(capitalize).join(' ');
    }).
    satisfies(is.string);
