//JavaScript Program to Convert the First Letter of a String into UpperCase

function capitalizeFirstLetter(str){
    let newStr = str.slice(0,1).toUpperCase() + str.slice(1);
    return newStr;
}
const string = 'hello';
let result = capitalizeFirstLetter(string)
console.log(result);