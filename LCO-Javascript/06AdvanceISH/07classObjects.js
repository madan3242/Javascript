// import User from './06classJs'
const User = require('./06classJs')

const madan = new User('Madan', 'madan@gm.co');

console.log(madan.getInfo());

madan.enrollCourse('React Bootcamp')
madan.enrollCourse('Angular Bootcamp')

console.log(madan.getCourseList());

let course = madan.getCourseList();
console.log(course.length);
course.forEach((c) => console.log(c));

madan.enrollCourse('Node Js');
console.log(course.length);