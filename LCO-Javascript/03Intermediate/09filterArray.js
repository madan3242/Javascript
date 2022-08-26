var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

// fill() its fills all the elements with that particular value
// start poit in inclusive and end point exclusive

console.log(testArray);

testArray.fill("Madan", 2, 5);

console.log(testArray);

//filter

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];
console.log(myNumber);
const result = myNumber.filter((num) => num % 2 == 0); 
console.log(result);

//Splice slice

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
console.log(users);

console.log(users.slice(1,4));

console.log(users);
users.splice(1, 3, "Hello", "there");
console.log(users);

let newArray = [1, 2, 3, 4, 5];
let newwArr = Array("hi", "i", "am", "not", "you");