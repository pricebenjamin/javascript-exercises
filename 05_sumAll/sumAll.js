const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        return "ERROR";
    }

    // tests dictate return ERROR with negative numbers
    if (a < 0 || b < 0) {
        return "ERROR";
    }

    // not covered by tests
    if (a == b) return a;

    // ensure a < b so that the following loop works
    if (b < a) {
        [a, b] = [b, a]
    }

    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
