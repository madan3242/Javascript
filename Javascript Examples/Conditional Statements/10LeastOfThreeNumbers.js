//Program to print the least of 3 numbers
var num1 = 9;
var num2 = 78;
var num3 = 19;

if (num1 < num2 && num1 < num3) {
    console.log(`${num1} is least number`);
}
else if(num2 < num1 && num2 < num3){
    console.log(`${num2} is least number`);
}
else{
    console.log(`${num3} is least number`);
}