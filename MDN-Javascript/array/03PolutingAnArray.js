const emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';
emp[3] = ' ';
emp[4] = 'Casey Jones';
console.log(emp);

for (let i = 0; i < emp.length; i++) {
    console.log(emp[i]);
}

var myVar = 10;
const myArray = new Array('hello', myVar, 3.14567);

const myArr = ['Mango', 'Apple', 'Banana', 'Orange'];

// Understanding length
// const cats = [];
// cats[25] = ['Dusty'];
// console.log(cats.length);

const cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs []; the cats array is empty

cats.length = 3;
console.log(cats); // logs [ <3 empty items> ]

//Iterating over arrays

const color = ['red', 'gren', 'blue', 'orange', 'black'];
for(let i = 0; i < color.length; i++){
    console.log(color[i]);
}

// const divs = document.getElementsByTagName('div');
// for (let i = 0, div; div = divs[i]; i++) {
//   /* Process div in some way */
// }


// forEach() method 

const colors = ['red', 'green', 'blue'];
colors.forEach((color) => console.log(color));
// red
// green
// blue

const sparseArray = ['first', 'second', , 'fourth'];

sparseArray.forEach((n) => {
    console.log(n);
})

if (sparseArray[2] === undefined) {
    console.log('sparseArray[2] is undefined');  // true
}

const nonsparseArray = ['first', 'second', undefined, 'fourth'];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// first
// second
// undefined
// fourths