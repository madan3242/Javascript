// JavaScript Program to Find the Largest Among Three Numbers

var num1 = parseInt(prompt("Enter number 1"));
var num2 = parseInt(prompt("Enter number 2"));
var num3 = parseInt(prompt("Enter number 3"));

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is largest number`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is largest number`);
} else{
    console.log(`${num3} is largest number`);
}

// Using Math.max()
const largest = Math.max(num1, num2, num3);
console.log(`${largest} is largest number`);