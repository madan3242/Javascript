// Destructure the data

// const user = ["madan", 3, "admin"];

// var name = user[0];
// var courseCount = user[1];
// var role = user[2];
// console.log(`Name: ${name} , Course:${courseCount}, Role:${role}`);

const myUser = {
    name: "Madan",
    courseCount: 5,
    role: "admin"
}

console.log(myUser.courseCount);

var { name, courseCount, role} = myUser;

console.log(role);