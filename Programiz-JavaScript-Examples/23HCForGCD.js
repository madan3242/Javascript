// JavaScript Program to Find HCF or GCD
let num1 = 72;
let num2 = 60;
let hcf;
for(let i = 1; i <= num1 && i <= num2; i++){
    if(num1 % i == 0 && num2 % i == 0){
        hcf = i;
    }
}

console.log(`HCF of ${num1} and ${num2} is ${hcf}`);