//JavaScript Program to Find Armstrong Number in an Interval
let low = 99;
let high = 99999;

console.log(`Armstrong Numbers :`);

for(let i = low; i <= high; i++){
    let numOfDigits = i.toString().length;
    
    let sum = 0;
    let temp = i;

    while(temp > 0){
        let remainder = temp % 10;
        sum += remainder ** numOfDigits;
        temp = parseInt(temp / 10);
    }
    if(sum == i){
        console.log(i);
    }
}