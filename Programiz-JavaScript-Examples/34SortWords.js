//JavaScript Program to Sort Words in Alphabetical Order

const string = 'I am learning JavaScript';

const words = string.split(' ');
console.log(words);

words.sort();

console.log(`The sorted words are : `);

for(const ele of words){
    console.log(ele);
}