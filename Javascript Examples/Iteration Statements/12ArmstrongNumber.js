let sum = 0;
const num = 371;

let temp = num;

while (temp > 0) {
    let reminder = temp % 10;

    sum += reminder * reminder * reminder;

    temp = parseInt(temp / 10);
}
if (sum == num) {
    console.log(num+" is armstrong number");
}
else{
    console.log(num+" is not armstrong number");
}