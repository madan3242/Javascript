// JavaScript Program to Remove a Property from an Object
const student = {
    name : 'John',
    age : 22,
    hobbies : ['reading', 'games', 'coding'],
    greet : function(){
        console.log('Hello, How are you ?');
    },
    score : {
        maths : 90,
        science : 80
    }
};

console.log(student);
delete student.greet;
console.log(student);

delete student['score'];
console.log(student);


