// Create an Object using Instance of Object Directly

const person = new Object({
    name : 'John',
    age : 20,
    hobbies : ['reading', 'games', 'coding'],
    greet : function(){
        console.log('Hello All');
    },
    score : {
        maths : 90,
        science : 85
    }
});

console.log(typeof person);

console.log(person.name);
console.log(person.age);

console.log(person.hobbies);
console.log(person.hobbies[1]);

person.greet();

console.log(person.score.science);

console.log(person);