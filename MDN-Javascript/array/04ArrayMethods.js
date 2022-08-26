

//concat() joins two or more arrays and returns a new array.

var myArray = ['1', '2', '3'];
var Arr = ['a', 'b', 'c']
myArray = myArray.concat(Arr);
console.log(myArray);
// myArray is now ["1", "2", "3", "a", "b", "c"]

// join(delimiter = ',') joins all elements of an array into a string.

var myArr = ['Wind', 'Rain', 'Fire'];
var list = myArr.join('-');
//list is now Wind-Rain-Fire
console.log(list);

//push() adds one or more elements to the end of an array and returns the resulting length of the array.
var myArray = ['1', '2'];
myArray.push('3');
// myArray is now [ '1', '2', '3' ]
console.log(myArray);

//pop() removes the last element from an array and returns that element.
var last = myArray.pop();
//myArray is now [ '1', '2' ], last = "3"
console.log(myArray);

//shift() removes the first element from an array and returns that element.

var myArr = ['1', '2', '3', '4'];
var first = myArr.shift();
//myArr is now [ '2', '3', '4' ]
console.log(myArr);

//unshift() adds one or more elements to the front of an array and returns the new length of the array.

var first = myArr.unshift('1');
//myArr is now [ '1', '2', '3', '4' ]
console.log(myArr);

//slice(start_index, up_to_index) extracts a section of an array and returns a new array.

var alpha = ['a', 'b', 'c', 'd', 'e'];
alpha = alpha.slice(1, 4);
//alpha is now [ 'b', 'c', 'd' ]
console.log(alpha);

//splice(index, count_to_remove, addElement1, addElement2, ...) removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

var myArr = ['1', '2', '3', '4', '5', '6'];
myArr.splice(1, 3,'a','b');
// myArr is now [ '1', '2', 'a', 'b', '6' ]
console.log(myArr);
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.


//reverse() transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.

var myArray = ['1', '2', '3'];
myArray.reverse();
console.log(myArray);
// console.log(myArray[0]);
// transposes the array so that myArray = ["3", "2", "1"]


//sort() sorts the elements of an array in place, and returns a reference to the array.

var myArray = ['Wind', 'Rain', 'Fire'];
myArray.sort();
console.log(myArray);

var numbers = [3, 6, 1, 9, 5, 7, 10, 2, 0];
numbers.sort();
console.log(numbers);

//indexOf(searchElement[, fromIndex]) searches the array for searchElement and returns the index of the first match.

var a = ['a', 'b', 'a', 'b', 'a'];

console.log(a.indexOf('b')); //logs 1

console.log(a.indexOf('a', 2)); //logs 2

console.log(a.indexOf('z')); // logs -1, because 'z' was not found

//lastIndexOf(searchElement[, fromIndex]) works like indexOf, but starts at the end and searches backwards.

var a = ['a', 'b', 'a', 'c', 'd', 'a', 'b', 'a'];

console.log(a.lastIndexOf('a'));

console.log(a.lastIndexOf('b', 2));


//forEach(callback[, thisObject]) executes callback on every array item and returns undefined.

var a = ['a', 'b', 'c'];
a.forEach((e) => (console.log(e))) // logs each item in turn
// a.forEach((e) => (console.log(e.toUpperCase())))

//map(callback[, thisObject]) returns a new array of the return value from executing callback on every array item.

var a1 = ['a', 'b', 'c'];
var a2 = a1.map((item) => (item.toUpperCase()))
console.log(a1);
console.log(a2);

//filter(callback[, thisObject]) returns a new array containing the items for which callback returned true.

var a1 = ['a', 10, 'b', 20, 'c', 30];

var a2 = a1.filter((item) => (typeof item === 'number'))
var a3 = a1.filter((item) => (typeof item === 'string'))

console.log(a1);
console.log(a2);
console.log(a3);

//every(callback[, thisObject]) returns true if callback returns true for every item in the array.

function isNumber(value){
    return typeof value === 'number';
}

var a1 = [1, 2, 3];
console.log(a1.every(isNumber));

var a2 = [1, 'a', 3];
console.log(a2.every(isNumber));

//some(callback[, thisObject]) returns true if callback returns true for at least one item in the array.

console.log(a2.some(isNumber));


// reduce()

var a = [10, 20, 20, 10];
const total = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // Prints 60

// reduceRight()

var tot = a.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(tot);