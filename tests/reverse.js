module.exports = function(op, str) {
    return str? op(str): true;
};

