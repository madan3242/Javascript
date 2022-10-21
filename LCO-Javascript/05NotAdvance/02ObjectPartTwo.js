var User ={
    name : "",
    getUserName : function() {
        console.log(`Username : ${this.name}`);
    }
}

var madan = Object.create(User, {
    name : { value : "Madan"},
});
console.log(madan);

madan.getUserName();