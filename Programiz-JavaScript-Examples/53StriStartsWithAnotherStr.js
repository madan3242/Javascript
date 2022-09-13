// JavaScript Program to Check if a String Starts With Another String
// Using startsWith()

const string = 'hello world';

const toCheck = 'he';

if (string.startsWith(toCheck)) {
    console.log(`The string starts with ${toCheck}`);
}
else{
    console.log(`The string does not starts with ${toCheck}`);
}

// Using lastIndexOf()
let result = string.lastIndexOf(toCheck, 0) === 0;

if (result) {
    console.log(`The string starts with "${toCheck}"`);
}
else{
    console.log(`The string does not starts with "${toCheck}"`);
}