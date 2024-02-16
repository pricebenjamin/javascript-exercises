const leapYears = function(year) {

    // Note: The order of these cases matters.
    // Since any number divisible by 400 is necessarily divisible
    // by 100 and by 4, we must check cases in the following order.

    if (year % 400 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
