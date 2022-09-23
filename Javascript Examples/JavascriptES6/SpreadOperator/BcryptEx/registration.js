// const bcrypt = require('bcrypt')

// let salt = bcrypt.genSaltSync(10);

// let user = {
//     name: "Madan",
//     email: "madan@gmail.com",
//     password : "123456",
//     cc: "877867889856"
// }
// console.log(user);

// let newPass = bcrypt.hashSync(user.password, salt);
// let newCC = bcrypt.hashSync(user.cc, salt);

// let flag = bcrypt.compareSync("12345", newPass);

// if (flag == true) {
//     console.log("Login Successful");
// }
// else{
//     console.log("Incorrect Password");
// }


// console.log(flag);

// // console.log(newPass); 
// // console.log(newCC);

// user = {
//     ...user,
//     password : newPass,
//     cc : newCC
// }

// console.log(user);
// // let newUser = {
// //     name: "Madan",
// //     email: "madan@gmail.com",
// //     password : "7655gtfts!jjdj76Y"
// // }

let bcrypt = require('bcrypt');

let salt = bcrypt.genSaltSync(10);

let user = {
    name: "Madan",
    email: "madan@gmail.com",
    password : "123456",
    cc: "877867889856"
}

let newPass = bcrypt.hashSync(user.password, salt);
let newCC = bcrypt.hashSync(user.cc, salt);

let flag = bcrypt.compareSync("123456", newPass);

if (flag) {
    console.log("Login Successful");
}
else{
    console.log("Incorrect password");
}

let newUser = {
    ...user,
    newPass,
    newCC
}

console.log(user);
console.log(newUser);

