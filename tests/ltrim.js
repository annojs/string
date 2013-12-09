module.exports = function(op, chars, str) {
    // TODO: figure out how to deal with invalid regex
    var res = op(' ', str);

    return res? res: true;
};

