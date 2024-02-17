const palindromes = function (text) {
    const stripped = text.toLowerCase()
        .split("")
        .filter(char => isAlphanumeric(char));
    const reversed = stripped.toReversed();

    return stripped.join("") == reversed.join("");
};

function isAlphanumeric(char) {
    return (
        ("0" <= char && char <= "9") ||
        ("A" <= char && char <= "Z") ||
        ("a" <= char && char <= "z")
    );
}

// Do not edit below this line
module.exports = palindromes;
