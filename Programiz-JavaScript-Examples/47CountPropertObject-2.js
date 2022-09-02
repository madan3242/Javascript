// Count the Number of Key in an Object Using Object.key()

const student = {
    name : 'John',
    age : 23,
    hobbies : ['reading', 'games', 'coding']
};

const result = Object.keys(student).length;

console.log(result);