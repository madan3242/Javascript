var fullName = "Madan Gowda";

//How to name varibales

//fullName cammel case
//full-name
//full_name snake case
//FullName

var courseName = "React JS Bootcamp"; //String

var isLoggedIn = true; //Boolean

var loggedCount = 34; //Numbers

console.log(loggedCount);
console.log("loggedCount");

var paymentMode; //undefined

console.log(paymentMode);

paymentMode = "upi payment";

//Reserved keywords
// var if = 23;

var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;
// This one may puzzle you until you read 'Variable hoisting' below

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;

