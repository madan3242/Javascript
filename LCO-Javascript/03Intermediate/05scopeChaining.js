//scope chaining

var name = "Madan";

console.log("Line no 3 "+name);

function sayName(){
    var name = "Mada"
    console.log("Line no 7 "+name);
    sayNameTwo();

    function sayNameTwo(){
        var name = "Mad"
        console.log("Line no 12 "+name);
    }
}

sayName();