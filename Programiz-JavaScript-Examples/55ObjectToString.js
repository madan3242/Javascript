// JavaScript Program to Convert Objects to Strings
// Convert Object to String Using JSON.stringify()

const person = {
    name : 'Jack',
    age : 27
};

const result = JSON.stringify(person);

console.log(person);

console.log(result);

console.log(typeof result);