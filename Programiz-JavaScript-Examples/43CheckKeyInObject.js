// JavaScript Program to Check if a Key Exists in an Object

const person = {
    id : 1,
    name : 'John',
    age : 23
}

const hasKey = 'name' in person;

if(hasKey){
    console.log('Key exists');
}
else{
    console.log('Key does not exist');
}