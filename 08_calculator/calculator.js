const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
  if (n === 0){
    return 1;
  }else {
    return n * factorial(n - 1);
  }
};
console.log(add(4, 3));
console.log(subtract(10,2));
console.log(sum([5,3,2,4,5,1]));
console.log(multiply(2,4));
console.log(power(2,6));
console.log(factorial(6));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
