// Allow user to access course if he is:
// logged in from email 
// logged in from google
// logged in from facebook

var email = false;
var facebook = true;
var google = false;

if (email) {
    console.log("Login success");
}
if (facebook) {
    console.log("Login success");
}
if (google) {
    console.log("Login success");
}

if(email || facebook || google){
    console.log("Login success");
}
else{
    console.log("Login failed");
}