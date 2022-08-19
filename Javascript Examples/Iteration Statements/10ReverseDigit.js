var num = 1234;
var reversed = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reversed(num));