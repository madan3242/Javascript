// JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

function checkString(str){
    if(str.startsWith('S') && str.endsWith('G')){
        console.log(`The string starts with S and ends with G`);
    }
    else if(str.startsWith('S')){
        console.log('The string starts with S');
    }
    else  if(str.endsWith('G')){
        console.log(`The string ends with G`);
    }
    else{
        console.log(`The string does not starts with S and does not ends with G`);
    }
}


let string = 'SSON';
checkString(string);
