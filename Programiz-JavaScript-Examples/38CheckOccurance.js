// Check Occurrence of a Character Using for Loop
const countString = (str, ch) => {
    let count = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == ch){
            count++;
        }
    }
    return count;
}
const string = "Hello All How are you";
const char = 'o';

const result = countString(string, char);
console.log(result);