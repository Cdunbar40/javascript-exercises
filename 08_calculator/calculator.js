const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(nums) {
  let sum = nums.reduce((accumulator, current) => accumulator+current,0);
  return sum;
};

const multiply = function(nums) {
  let total = nums.reduce((accumulator, current) => accumulator*current);
  return total;
};

const power = function(base, pow) {
	return Math.pow(base, pow);
};

const factorial = function(num) {
	if (num == 0){return 1;}
  let fact = num;
  while(num > 1){
    fact = fact*(num-1);
    num -=1;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
