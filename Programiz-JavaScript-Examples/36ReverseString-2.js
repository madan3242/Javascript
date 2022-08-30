// Reverse a String Using built-in Methods

function reverseString(str){
    const arrayString = str.split("");

    const reverseArray = arrayString.reverse();

    const joinArray = reverseArray.join("");

    return joinArray;
}

const string = "Hello ood Morning";

const result = reverseString(string);

console.log(result);