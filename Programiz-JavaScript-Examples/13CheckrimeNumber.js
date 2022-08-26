//JavaScript Program to Check Prime Number

var num = 23;

let isPrime = true;

if(num === 1){
    console.log(`${num} is neither prime nor composite number.`);
}
else if(num > 1){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`${num} is prime number`);
    }
    else{
        console.log(`${num} is not prime number`);
    }
}
else{
    console.log(`The number is not a prime number`);
}