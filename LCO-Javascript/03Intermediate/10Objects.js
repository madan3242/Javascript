var user = {
    firstName : "Madan",
    lastName : "Gowda",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true
};
console.log(user);

console.log(user.firstName);
console.log(user["lastName"]);


var count = user.loginCount;
console.log(count);

user.loginCount++;
console.log(user.loginCount);

console.log(user);
console.table(user);

var iPhone = {
    name : "iPhone 13",
    brand : "Apple",
    ram : 8,
    storage : 256,
    color : "black",
    frontCamera : 12,
    backCamera : 12,
    faceId : true,
    osVersion : "MacOS 14.879"
};

console.log(iPhone);
console.table(iPhone);