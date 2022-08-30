// JavaScript Program to Count the Number of Vowels in a String

let countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;
}

const string = 'hello howa are you';

const result = countVowels(string);

console.log(result);