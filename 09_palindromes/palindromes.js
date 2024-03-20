const palindromes = function (string) {
    let arr = Array.from(string).filter((char) =>  (char.toLowerCase() != char.toUpperCase()) || Number.isInteger(Number.parseInt(char)));
    let forward = arr.join('').toLowerCase();
    let rev = arr.reverse().join('').toLowerCase();
    return forward == rev;
};

// Do not edit below this line
module.exports = palindromes;
