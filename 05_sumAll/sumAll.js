const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
};

let start = Math.min(num1, num2);
let end = Math.max(num1, num2);

let sum = 0;
for (let i = start; i <= end; i++){
    sum+= i;
}
return sum;
}

console.log(sumAll(9,4));


// Do not edit below this line
module.exports = sumAll;
