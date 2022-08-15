// Javascript Program to Check if a number is Positive, Negative, or Zero

let num = parseInt(prompt("Enter a number")); 

if (num > 0) {
    console.log(`${num} is a positive number`);
} else if(num == 0) {
    console.log(`Number is zero`);
} else{
    console.log(`${num} is a negative number`);
}