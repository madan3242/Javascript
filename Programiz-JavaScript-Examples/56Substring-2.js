// Check String with indexOf()

const string = "Javascript is fun";
const checkString = "funn";

if(string.indexOf(checkString) !== -1){
    console.log(`"${string}" contains "${checkString}"`);
}
else{
    console.log(`"${string}" does not contains "${checkString}"`);
}