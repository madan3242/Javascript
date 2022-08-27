// JavaScript Program to Find the Factors of a Number

const num = 24;

console.log(`Factors of ${num} : `);
for (let i = 1; i <= num; i++){
    if (num % i == 0) {
        console.log(i);
    }
}