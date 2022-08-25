console.log(this);

var game = "BasketBall";
// console.log(this.game);

function sayName(){
    var name = "Madan";
    console.log(this);
}
var sayAnotherName = () => {
    var name = "Madan";
    console.log(this);
}
sayName();
sayAnotherName();
