// Javascript Program to Generate a Random Number

var num = Math.random();
console.log(`Random number = ${num}`);

//Get a Random Number between 1 and 10
//Math.random() * (highestNumber - lowestNumber) + lowestNumber
var num = Math.random() * (10-1) + 1;
console.log(`Random number form 1 to 10 = ${num}`);

//Integer Value between 1 and 10
var num = Math.floor(Math.random() * (10-1) + 1);
console.log(`Random integer number form 1 to 10 = ${num}`);


//Integer Value between Two Numbers (Inclusive)

//Math.floor(Math.random() * (max - min + 1)) + min

var min = 49;
var max = 68;

//generate random number
var randNum = Math.floor(Math.random() * (max - min + 1) + min);

//display
console.log(`Random number from ${min} to ${max} is ${randNum}`);