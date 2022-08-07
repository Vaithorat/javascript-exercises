const add = function(num1, num2) {
  return addition = num1+num2;
	
};

const subtract = function(num1, num2) {
	return sub = num1 - num2;
};

const sum = function(array) {
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);
return sum; 
};

const multiply = function(array) {
  const mult = array.reduce((partialMult, a) => partialMult * a, 1);
  return mult;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
  if(num==0) return 1;
  
  let fact = 1;
	for (let i =1 ; i<=num ; i++)
  {
    fact = fact*i
  
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
