const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z]/g, '');

    return str === str.split('').reverse().join('');
};

console.log(palindromes('a nut for a jar of tuna'));
// Do not edit below this line
module.exports = palindromes;
