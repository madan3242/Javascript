const foo = ['one', 'two', 'three'];

//Without destructuring
// const one = foo[0];
// const two = foo[1];
// const three = foo[2];

//With destructuring
const [one, two, three] = foo;
console.log(one);

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(rest); // expected output: Array [30,40,50]
