var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    // this.getFirstName = function (){
    //     console.log(`User : ${this.firstName}`);
    // }
    this.getCourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
    };
};


User.prototype.getFirstName = function() {
    console.log(`User : ${this.firstName}`);
}

var madan = new User("Madan", 3);

console.log(madan);
madan.getFirstName();

madan.getCourseCount();

var madhu = new User("Madhu", 4);

console.log(madhu);