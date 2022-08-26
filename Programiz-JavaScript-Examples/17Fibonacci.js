//JavaScript Program to Print the Fibonacci Sequence

var num = 15;
var first = 0, second = 1;
console.log(`Fibonacci series :`);
for(let i = 1; i <= num; i++){
    var next;
    console.log(first);
    next = first + second;
    first = second;
    second = next;
}