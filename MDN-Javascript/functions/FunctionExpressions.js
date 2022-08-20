const square = function(num){
    return num * num;
}

var result = square(5);
console.log(result);

const factorial = function fac(n){
    return n < 2 ? 1 : n * fac(n-1);
}

console.log(factorial(6));
// console.log(fac(6));

function map(f, a){
    const result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const f = function(x){
    return x * x * x;
}

const num = [0, 1, 2, 5, 10];
const cube = map(f, num);
console.log(cube);

let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = 'Toyota';
  }
}

const numB = (a, f) => {

}

function facOfNum(n){
    if (n === 0 || num === 1) {
        return 1;
    }
    else{
        return n * facOfNum(n - 1);
    }
}

const a = facOfNum(1);
const b = facOfNum(2);
const c = facOfNum(3);
const d = facOfNum(4);
const e = facOfNum(5);
console.log(a+" "+b+" "+c+" "+d+" "+e);
