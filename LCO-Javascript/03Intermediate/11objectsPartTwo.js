var user = {
    firstName : "Madan",
    lastName : "Gowda",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    getCourseList : function(){
        for (let i = 0; i < this.courseList.length; i++) {
            console.log(` ${this.courseList[i]}`);
        }
    },
    getInfo : function () {
        return `
        First Name      : ${this.firstName}
        Last Name       : ${this.lastName}
        Role            : ${this.role}
        Login Count     : ${this.loginCount}
        Facebook Signed In : ${this.facebookSignedIn}
        `
    }
};

var courseList = true;


user.buyCourse("Frontend course");
console.log(user.getCourseCount());
user.buyCourse("React course");
console.log(user.getCourseCount());
user.buyCourse("Angular course");
console.log(user.getCourseCount());

user.getCourseList();


console.log(user.getInfo());