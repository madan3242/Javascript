// User is only allowed to make a purchse when he is:
// looged inemail verified
// cardInfo - valid 
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

if (isLoggedIn) {
    console.log("Logged is success");
    if (isEmailVerified) {
        console.log("Email is verified");
        if (cardInfo) {
            console.log("You can make a purchase");
        }
    }
}


if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("You are allowed to make purchase");
} else {
    console.log("You are not allowed");
}