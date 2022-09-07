let user = {
    id : 101,
    name : 'Madan',
    email : 'madan323@gmail.com'
};

let details = {
    email : 'madan3232@gmail.com',
    sal : '45000'
};

let user_Details = {...user, ...details};

console.log(user_Details);