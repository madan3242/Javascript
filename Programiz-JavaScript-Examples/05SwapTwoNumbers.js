// JavaScript Program to Swap Two Variables


//Using a Temporary Variable
var num1 = 7;
var num2 = 6;

console.log("Before swap num1 = "+num1);
console.log("Before swap num2 = "+num2);

var temp = num1;
num1 = num2;
num2 = temp;

console.log("After swap num1 = "+num1);
console.log("After swap num2 = "+num2);

//Using ES6 Destructuring assignment

var num1 = 4;
var num2 = 8;

console.log("Before swap num1 = "+num1);
console.log("Before swap num2 = "+num2);

[num1, num2]=[num2, num1];

console.log("After swap num1 = "+num1);
console.log("After swap num2 = "+num2);

//Using Arithmetic Operators

var num1 = 3;
var num2 = 6;

console.log("Before swap num1 = "+num1);
console.log("Before swap num2 = "+num2);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("After swap num1 = "+num1);
console.log("After swap num2 = "+num2);

//Using Bitwise XOR operator
var num1 = 10;
var num2 = 15;

console.log("Before swap num1 = "+num1);
console.log("Before swap num2 = "+num2);

num1 = num1 ^ num2;
num2 = num1 ^ num2;
num1 = num1 ^ num2;

console.log("After swap num1 = "+num1);
console.log("After swap num2 = "+num2);