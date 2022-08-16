//Program to check if a number is having 4 at units place or not

var num1 = 195994;
var num2 = num1 % 10;
if (num2 == 4) {
    console.log(`${num1} has 4 in it's units place`);
} else {
    console.log(`${num1} don't have 4 in it's units place`);
}
