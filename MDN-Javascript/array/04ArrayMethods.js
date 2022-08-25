

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
myArr.splice(2, 3,'a','b');
// myArr is now [ '1', '2', 'a', 'b', '6' ]
console.log(myArr);

//reverse() transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.

var myArray = ['1', '2', '3'];
myArray.reverse();
console.log(myArray);
// console.log(myArray[0]);
// transposes the array so that myArray = ["3", "2", "1"]
