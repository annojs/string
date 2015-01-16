'use strict';

var names = [
    'atoi', 'capitalize', 'extract', 'fill', 'itoa', 'lower',
    'ltrim', 'partition', 'reverse', 'rtrim', 'split', 'title',
    'trim', 'upper'
];
var modules = {};

names.forEach(function(name) {
    modules[name] = require('./' + name);
});

module.exports = modules;
