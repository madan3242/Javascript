// function isEven(element){
//     if(element % 2 == 0){
//         return true;
//     }
//     return false;
// }

// function isEven(element){
//     return element % 2 == 0;
// }

// var isEven = function(element){
//     return element % 2 == 0;
// }

// var isEven = (element) => {
//     return element % 2 == 0;
// }

var isEven = (element) => element % 2 == 0;

console.log(isEven(3));

//Callback function

var result = [2, 4, 6].every(isEven);
console.log(result);

var res = [2, 4, 6, 8].every((e) => {
    return e % 2 == 0;
})

console.log(res);

var res = [2, 4, 6, 8].every((e) => (e % 2 == 0));
console.log("Result");
console.log(res);

//Arrow function

// () => {}

//Callback

// () = ()