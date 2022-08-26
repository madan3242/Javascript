//For all regular function calls, this points to window object

console.log(this);

var user = {
    name : 'Madan',
    courseCount : 4,
    getCourseCount : function () {
        console.log("Line 9", this);
    }
};
user.getCourseCount();

function sayHello(){
    console.log("Hello", this);
}
sayHello();

var namee = () => this;
console.log(namee());