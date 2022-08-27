// JavaScript Program to Find Factorial of Number Using Recursion
function factorial(n){
    if (n == 0) {
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
const num = 4;

if(num > 0){
    const result = factorial(num);
    console.log(`Factorial of ${num} is ${result}`);
}
else{
    console.log(`Enter a positive number`);
}