//Show user a signout button if he is authenticated,
//other wise show him option to Login/Signup

var authenticated = true;

if (authenticated) {
    console.log("Show signout button");
} else {
    console.log("Show login option");
}

//Conditional (ternary) operator

var result = (authenticated) ? 'Show signout button' : 'Show login option';
console.log(result);

authenticated?console.log("Signout"):console.log("Login");;