module.exports = function(op, amount, chr, str) {
    var res = op(amount, chr, str);

    // TODO: figure out an invariant
    return true;
};

