var num = 10;
var sum = 0;

console.log("For loop");
for (let i = 1; i <= num; i++) {
    sum +=i;
}
console.log(sum);

console.log("While loop");
sum = 0;
var i = 0;
while (i <= num) {
    sum +=i;
    i++;
}
console.log(sum);

console.log("Do while loop");
sum = 0;
var i = 0;
do {
    sum +=i;
    i++;
} while (i <= num);

console.log(sum);