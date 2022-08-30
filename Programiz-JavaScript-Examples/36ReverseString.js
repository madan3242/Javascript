// JavaScript Program to Reverse a String

function reverseString(str){
    let newString = "";
    for(let i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}

const string = "hello there have a nice day";

const result = reverseString(string);

console.log(result);