// var name;
// var name1;
// var name2;

var countries = ["India", "USA", "Russia", "Japan"];

var states = new Array("Karnataka", "Goa", "Telangana", "Kerala", "Andra Pradesh", "Tamil Nadu");

console.log(states);
console.log(states[0]);
console.log(states.length);

states[1] = "Maharastra";
console.log(states);

var user = ["1023", "Madan", "madan10909@gmail.com", 23, true];
console.log(user);

user.pop();
user.pop();

console.log(user);

user.push("21-06");

console.log(user);

//Add starting element of an array

user.unshift("NEW VALUE");
console.log(user);

//Remove starting element of an array

user.shift();
console.log(user);

// indexOf() elemet in an array
console.log(user.indexOf("Newww"));

console.log(user.indexOf("21-06"));

//Creates array from given element 
console.log(Array.from("Madan"));