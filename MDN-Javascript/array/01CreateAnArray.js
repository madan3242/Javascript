
//Creating an array
var arr1 = new Array(element0, element1, /* … ,*/ elementN);
var arr2 = Array(element0, element1, /* … ,*/ elementN);
var arr3 = [element0, element1, /* … ,*/ elementN];

var arr = new Array(ele0, ele1, ele2,/* , , */ eleN);
var arr = Array(ele0, ele1,ele2,/* , , */ eleN);
var arr = [ele0, ele1, ele3, , , eleN];


arr.length;

//To create an array with non-zero length, but without any items, either of the following can be used:

// This...
var arr1 = new Array(arrayLength);

// ...results in the same array as this
var arr2 = Array(arrayLength);

// This has exactly the same effect
var arr3 = [];
arr3.length = arrayLength;

const obj = {};

obj.prop = [element0, element1, element2, elementN];

const obj = {props : [element0, element1, element2, elementN]};

// This creates an array with only one element: the number 54.

const arrr = [54];

// This creates an array with no elements and arr.length set to 42.

const arrr2 = Array(42);

// This is equivalent to:

const arrr3 = [];
arrr3.length = 42;

const arr = Array(9.3); // RangeError: Invalid array length
