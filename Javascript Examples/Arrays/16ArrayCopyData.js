const myArray = ['1', '2', '3', '4', '5'];

// spread operator 
let num = [...myArray];

console.log(num);

// map 
const myArr = num.map( (item) => item);
console.log(myArr);