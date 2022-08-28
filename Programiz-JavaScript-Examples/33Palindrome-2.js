// Check Palindrome using built-in Functions

const string = 'hello';

let checkPalindrome = (string) => {
    const arrayValues = string.split('');
    // console.log(arrayValues);

    const reverseArrayValues = arrayValues.reverse();
    // console.log(reverseArrayValues);

    const reverseString = reverseArrayValues.join('');
    // console.log(reverseString);

    if(string == reverseString){
        return `It is a palindrome`;
    }
    else{
        return `It is not a palindrome`;
    }
}

let result = checkPalindrome(string);

console.log(result);