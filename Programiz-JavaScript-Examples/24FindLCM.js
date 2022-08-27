//JavaScript Program to Find LCM
let num1 = 24;
let num2 = 30;

let max = (num1 > num2) ? num1 : num2;

while(true){
    if(max % num1 == 0 && max % num2 == 0){
        console.log(`The LCM of ${num1} and ${num2} is ${max}`);
        break;
    }
    max++;
}

//LCM Calculation Using HCF

let hcf;

for(let i = 1; i <= num1 && i <= num2; i++){
    if (num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }
}

let lcm = (num1 * num2)/hcf;

console.log(`The LCM of ${num1} and ${num2} is ${lcm}`);

