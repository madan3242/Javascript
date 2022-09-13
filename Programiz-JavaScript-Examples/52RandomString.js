// JavaScript Program to Generate Random String

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function genrateRandom(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(genrateRandom(10));

// Generate Random Strings Using Built-in Methods

const result = Math.random().toString(36).substring(2, 7);

console.log(result);