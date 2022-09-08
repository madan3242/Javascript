const bcrypt = require('bcrypt');

let user = {
    name : 'Madan',
    email : 'madan@madan.com',
    password : '45342'
};

let salt = bcrypt.genSaltSync(8);

user.password = bcrypt.hashSync(user.password, salt);

console.log(user);

let pass = '45342';
hashPass = bcrypt.hashSync(pass, salt);

if(user.password === hashPass){
    console.log('Password match');
}
else{
    console.log('Invalid password');

}