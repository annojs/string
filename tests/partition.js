var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');

var partition = require('../').partition;


fuzz._amount = 100;
fuzz(partition, function(op, chr, str) {
    chr = chr[0];

    var parts = str.split(chr);
    var lPart = parts[0];
    var rPart = parts.slice(1).join(chr);

    if(is.string(chr) && is.string(str)) {
        var res = op(chr, str);

        if(res.length == 2) return res[0] == lPart && res[1] == rPart;
        else return res[0] == lPart;
    }

    return true;
});
