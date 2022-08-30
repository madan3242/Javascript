// JavaScript Program to Create Objects in Different Ways

// Using object literal

const person = {
    name : 'John',
    age : 20,
    hobbies : ['reading', 'games', 'coding'],
    greet : function(){
        console.log('Hello All');
    },
    score: {
        maths : 90,
        science : 95
    }
};

console.log(typeof person);

console.log(person.name);
console.log(person.age);

console.log(person.hobbies);
console.log(person.hobbies[1]);

person.greet();

console.log(person.score.science);

console.log(person);