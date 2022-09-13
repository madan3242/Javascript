// Two variables, two distinct objects with the same properties
const fruit = {name: 'apple'};
const fruitbear = {name: 'apple'};

fruit == fruitbear; // return false
fruit === fruitbear; // return false
console.log(fruit == fruitbear);
console.log(fruit === fruitbear);

// Two variables, a single object
const fruit1 = {name: 'apple'};
const fruitbear1 = fruit1;  // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit1 == fruitbear1; // return true
fruit1 === fruitbear1; // return true

fruit1.name = 'grape';
console.log(fruitbear1); // output: { name: "grape" }, instead of { name: "apple" }
