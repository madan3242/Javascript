

//   for ([initialExpression]; [conditionExpression][incrementExpression])
//         statement
for (let step = 0; step < 10; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
  }
  

// Do While 
// do
//   statement
// while (condition);

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

// While 
// while (condition)
//   statement

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

// Infinite loops are bad!
// while (true) {
//     console.log('Hello, world!');
//   }

//labeled statement
// label:
//   statement

// markLoop:
// while (theMark) {
//   doSomething();
// }

//break statement
// break;
// break label;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] === theValue) {
//       break;
//     }
//   }

//   let x = 0;
//   let z = 0;
//   labelCancelLoops: while (true) {
//     console.log('Outer loops: ', x);
//     x += 1;
//     z = 1;
//     while (true) {
//       console.log('Inner loops: ', z);
//       z += 1;
//       if (z === 10 && x === 10) {
//         break labelCancelLoops;
//       } else if (z === 10) {
//         break;
//       }
//     }
//   }

// continue statement
// continue;
// continue label;

// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }
//1,3,7,12

// let i = 0;
// let j = 10;
// checkiandj: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkj: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if ((j % 2) === 0) {
//       continue checkj;
//     }
//     console.log(j, ' is odd.');
//   }
//   console.log('i = ', i);
//   console.log('j = ', j);
// }

// for...in statement
// for (variable in object)
//   statement

// function dumpProps(obj, objName) {
//     let result = '';
//     for (const i in obj) {
//       result += `${objName}.${i} = ${obj[i]}<br>`;
//     }
//     result += '<hr>';
//     return result;
//   }

// for...of statement
// for (variable of object)
//   statement

const arr = [3, 5, 7];
arr.foo = 'hello';

for (const i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

// arrays 
for (const i of arr) {
  console.log(i); // logs 3, 5, 7
}