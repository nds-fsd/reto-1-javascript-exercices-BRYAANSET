const repeatString = function(wordToRepeat, num) {
    if (num<0){
        return 'ERROR';
    }else {
    let outputMsg = '';
    for (let i = 0; i < num; i++){
        outputMsg += wordToRepeat;
    }
    return outputMsg;
    }
};
console.log(repeatString('ja',1));

// Do not edit below this line
module.exports = repeatString;