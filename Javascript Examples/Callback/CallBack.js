let sum = (a, b) => {
    return a + b;
}
let mul = (a, b) => {
    return a * b;
}

let calculate = (a, b, callback) =>{
    return callback(a, b);
}

console.log(calculate(10, 20, sum));
console.log(calculate(10, 20, mul));