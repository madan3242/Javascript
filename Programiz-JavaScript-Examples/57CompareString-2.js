//Using localeCompare()

const string1 = "Javascript program";
const string2 = "Javascript program";

const result = string1.localeCompare(string2, undefined, { sensitivity : 'base'});

if (result == 0) {
    console.log(`The strings are similar.`);
}
else{
    console.log(`The strings are not similar.`);
}