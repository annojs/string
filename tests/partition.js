var is = require('annois');


module.exports = function(op, chr, str) {
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
};

