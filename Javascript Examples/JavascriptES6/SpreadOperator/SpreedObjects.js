let user = {
    id : 1022,
    name : "Emp 2",
    email : "hello123@gmail.com"
}

let details = {
    email : "hello@gmail.com",
    address : "Banglore",
    salary : 54000
}

let userDetails = {...user, ...details};

console.log(user);
console.log(details);
console.log(userDetails);