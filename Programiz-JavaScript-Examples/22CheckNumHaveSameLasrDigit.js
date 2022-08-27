// JavaScript Program to Check if the Numbers Have Same Last Digit

const a = 789;
const b = 70;
const c = 1119;

const result1 = a % 10;
const result2 = b % 10;
const result3 = b % 10;

if (result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have same last digit.`);
}
else{
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}