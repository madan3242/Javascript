// JavaScript Program to Compare Two Strings

// Using toUpperCase()

const string1 = "Javascript program";
const string2 = "Javascript program";

const result = string1.toUpperCase() === string2.toUpperCase();

if (result) {
    console.log(`The strings are similar.`);
}
else{
    console.log(`The strings are not similar.`);
}