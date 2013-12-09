var is = require('annois');


// TODO: it would be nice to fuzz this with string containing only characters
// in that case it is possible to verify the upper/lowercase behavior
module.exports = function(op, str) {
    if(str) {
        var res = op(str);
        return is.upperCharacter(res[0]) || res[0] == str[0];
    }

    return true;
};

