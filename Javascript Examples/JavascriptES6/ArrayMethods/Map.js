// let size = [43, 23, 33, 76, 65, 78];

// size.map((n) => {
//     console.log(n);
// })

let numbers = [11, 12, 13, 14];

let new_Numbers = numbers.map((n) => {
    console.log(n);
    let x = n + 100;
    return x;
})

console.log(new_Numbers);