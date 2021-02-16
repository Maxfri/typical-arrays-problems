exports.min = function min(array) {
    if (arguments.length == 0 || array.length == 0) {
        return 0;
    } else {
        let result = array.reduce(function (min, current) {
            if (min > current) {
                return (min = current);
            } else {
                return min;
            }
        }, 0);
        return result;
    }
};

exports.max = function max(array) {
    if (arguments.length == 0 || array.length == 0) {
        return 0;
    } else {
        let result = array.reduce(function (max, current) {
            if (max < current) {
                return (max = current);
            } else {
                return max;
            }
        }, 0);
        return result;
    }
};

exports.avg = function avg(array) {
    if (arguments.length == 0 || array.length == 0) {
        return 0;
    } else {
        let result = array.reduce(function (avr, current) {
            return avr + current;
        }, 0);
        return result / array.length;
    }
};
