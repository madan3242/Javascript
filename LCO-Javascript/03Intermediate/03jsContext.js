if(2 == "2"){
    console.log("This is true 1");
}
if(2 === "2"){
    console.log("This is true 2");
}

var myName = "Madan";
if (myName === myName) {
    console.log("Its a true statement");
}

//Works in browser 
//Context window
//Don't work on node as its global context
var myName = "Madan";
if (myName === window.myName) {
    console.log("Its a true statement");
}