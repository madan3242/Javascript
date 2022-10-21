const madan = {
    firstName : "Madan",
    lastName : "Gowda",
    role : "Admin",
    courseCount : 3,
    getInfo : () => {
        console.log(`
            First Name : ${this.firstName}
            Last Name : ${this.lastName}
            Role : ${this.role}
            Learning : ${this.courseCount}
        `);
    }
}

const dj ={
    firstName: "Rock",
    lastName: "DJ",
    role: "sub-admin",
    courseCount: 5,
};

madan.getInfo.bind(dj);

var djInfo = madan.getInfo.bind(dj);

madan.getInfo.call(dj);

