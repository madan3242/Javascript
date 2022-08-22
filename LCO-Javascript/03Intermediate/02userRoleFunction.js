/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin- with all access
subadmin- with access to create/delete courses
testprep- with access to create/delete tests
user- consume all content
other- trial user.

Input: getUserRole(name, role)
*/

function getUserRole(name, role){
    switch (role) {
        case 'admin':
            return `${name} is admin with all access`;
            break;
        case 'subadmin':
            return `${name} is subadmin with acccess to create and delete courses`;
            break;
        case 'testprep':
            return `${name} is testprep with access to create and delete tests`;
            break;
        case 'user':
            return `${name} is user to consume content`;
            break;
        case 'guest':
            return`${name} is trial user`
        default:
            break;
    }
}

getUserRole('Madan', 'Admin');
console.log(getUserRole("Madan", "Admin"));

var getRole = getUserRole('Madan', 'admin');

console.log(getRole);

var getUserRole = function (name, role){
    switch (role) {
        case 'admin':
            return `${name} is admin with all access`;
            break;
        case 'subadmin':
            return `${name} is subadmin with acccess to create and delete courses`;
            break;
        case 'testprep':
            return `${name} is testprep with access to create and delete tests`;
            break;
        case 'user':
            return `${name} is user to consume content`;
            break;
        case 'guest':
            return`${name} is trial user`
        default:
            break;
    }
}
var getRole = getUserRole("madan", "user");
console.log(getRole);


//Arrow
var getUserRole = (name, role) => {

}
var roleUser = (name, role) => {
    
}