const removeFromArray = function(arr, ...values) {
    return arr.filter(x => !values.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
