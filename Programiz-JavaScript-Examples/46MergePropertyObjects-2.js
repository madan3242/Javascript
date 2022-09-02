// Merge Property of Two Objects Using Spread Operator

const person = {
    name : 'Jack',
    age : 26
}

const student = {
    gender : 'male'
}

const newObj = {...person, ...student};

console.log(newObj);