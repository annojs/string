module.exports = function(op, str, start, end) {
    var res = op(str, start, end);

    // TODO: figure out a nice invariant
    return true;
};

