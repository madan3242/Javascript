// var returnValue = Math.max(2, 5, 7, 1, 9, 15, 7, 8, 4);
// console.log(returnValue);

// var myObj = {}

// Object.assign(myObj, { a : 1, b : 2, c : 3 },
//                      { x : 3, y : 7, z : 4 })

// console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

var myArr = [4, 8];
console.log(sumOne(...myArr)); //spread operator

function sumTwo(...args) { // rest operator
    console.log(args);
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(1, 2, 3, 4, 5, 6));

function sumMulti(a, b, ...args) { // spred operator
    console.log(`${a}, ${b}, ${args}`);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [multi, sum];
}

console.log(sumMulti(2, 3, 4, 7, 9, 10, 12));