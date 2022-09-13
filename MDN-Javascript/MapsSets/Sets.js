const mySet = new Set();

mySet.add(1);
mySet.add('some text');
mySet.add('foo');

console.log(mySet);

mySet.has(1);
console.log(mySet.has(1));
console.log(mySet.has(2));

mySet.delete('foo')
mySet.size;

for(const item of mySet){
    console.log(item);
}

// Converting between Array and Set
let arr = Array.from(mySet);
console.log(arr);

let arr1 = [...mySet];
console.log(arr1);

// arr1.splice(arr1.indexOf())

let mySet2 = new Set([1, 2, 3, 4, 5]);
console.log(mySet2);

let arr3 = [...mySet2];
console.log(arr3);

arr3.splice(arr3.indexOf(3), 1);
console.log(arr3);