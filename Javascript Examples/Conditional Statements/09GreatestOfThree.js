//Program to print the greatest of 3 numbers
var num1 = 90;
var num2 = 78;
var num3 = 119;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greatest number`);
}
else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is greatest number`);
}
else{
    console.log(`${num3} is greatest number`);
}