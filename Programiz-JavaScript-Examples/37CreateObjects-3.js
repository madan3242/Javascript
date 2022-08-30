// Create an object using Constructor Function

function Person () {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function () {
        console.log('Hello Everyone');
    },
    this.score = {
        maths : 90,
        science : 87
    }
}

const person = new Person();

console.log(typeof person);

console.log(person.name);
console.log(person.age);

console.log(person.hobbies);
console.log(person.hobbies[1]);

person.greet();

console.log(person.score.science);

console.log(person);