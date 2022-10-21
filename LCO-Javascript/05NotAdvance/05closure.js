// function init(){
//     var firstName = "Madan";
//     console.log("I am init");

//     function sayFirstname(){
//         console.log(`Name : ${firstName}`);
//     }
//     return sayFirstname;
// }

// // var value = init();
// // value();

// function doAddition(x){
//     console.log(x);
//     return function(y){
//         console.log(y);
//         return x + y;
//     }
// }

// var add5 = doAddition(4);
// console.log(add5(5));

// console.log(doAddition(4)(5));

// // doAddition()()(); curring

function doAddition(x){
    console.log(x);
    return function(y){
        console.log(y);
        console.log(x + y);
    }
}

doAddition(5)(6);