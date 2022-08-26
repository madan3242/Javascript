// Array constructor:
const a = Array(5); // [ <5 empty items> ]

// Consecutive commas in array literal:
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// Directly setting a slot with index greater than array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// Elongating an array by directly setting .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// Deleting an element:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]



const arr = [1, 2, , , 5]; // Create a sparse array

// Indexed access
console.log(arr[2]); // Logs "undefined"

// For...of
for (const i of arr) console.log(i);
// Logs "1 2 undefined undefined 5"

// Spreading
const another = [...arr]; // "another" is [ 1, 2, undefined, undefined, 5 ]
