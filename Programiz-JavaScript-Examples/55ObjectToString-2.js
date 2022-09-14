// Convert Object to String Using String()

const person = {
    name : 'Jack',
    age : 27
};

const result = String(person);
const result2 = String(person['name']);

console.log(result);
console.log(result2);

console.log(typeof result);