const fibonacci = function(index) {
    if (index < 0) return "OOPS";

    // fibonacci #s: 0, 1, 1, 2, 3, 5, 8, 13, 21...
    //        index: 0  1  2  3  4  5  6   7   8...

    let a = 0;
    let b = 1;
    for (let i = 0; i < index; i++) {
        [a, b] = [b, a + b];
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
