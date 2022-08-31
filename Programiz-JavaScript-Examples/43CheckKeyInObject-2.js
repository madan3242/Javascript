// Check if Key Exists in Object Using hasOwnProperty()

const person = {
    id : 1,
    name : 'John',
    age : 23
}

const hasKey = person.hasOwnProperty('name');

if(hasKey){
    console.log('Key exists');
}
else{
    console.log('Key does not exist');
}