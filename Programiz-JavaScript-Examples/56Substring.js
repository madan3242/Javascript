// JavaScript Program to Check Whether a String Contains a Substring

const string = "Javascript is fun";
const checkString = "funn";

if(string.includes(checkString)){
    console.log(`"${string}" contains "${checkString}"`);
}
else{
    console.log(`"${string}" does not contains "${checkString}"`);
}