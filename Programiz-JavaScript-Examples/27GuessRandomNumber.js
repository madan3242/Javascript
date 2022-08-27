// JavaScript Program to Guess a Random Number

function guessNumber(){
    const random = Math.floor(Math.random() * 10) +1;

    let num = parseInt(prompt('Enter a number from 1 to 10'));

    while(num != random){
        num = parseInt(prompt('Enter a number from 1 to 10'));
    }

    if(num == random){
        console.log(`Your guess is correct`);
    }
}

guessNumber();