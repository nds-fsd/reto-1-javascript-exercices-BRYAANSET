const reverseString = function(wordToReverse) {
    
    let splitWord = wordToReverse.split('');

    let reverseSplitCharacters = splitWord.reverse();

    let joinCharacters = reverseSplitCharacters.join('');

    return joinCharacters;
};


console.log(reverseString('pejelagarto'));

// Do not edit below this line
module.exports = reverseString;
