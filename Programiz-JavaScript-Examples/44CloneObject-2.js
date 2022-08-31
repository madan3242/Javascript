//Clone the Object Using Spread Syntax

const person = {
    name : 'John',
    age : 21
}

const clonePerson = {... person}

console.log(clonePerson);

clonePerson.name = 'Peter';

console.log(clonePerson);
console.log(person);

const person2 = {
    name : 'John',
    age : 21,
    marks : {
        math : 98,
        scence : 95
    }
}

const clonePerson2 = {... person2};

console.log(clonePerson2);

clonePerson2.marks.math = 100;
console.log(person2);
console.log(clonePerson2);