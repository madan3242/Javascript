
//  [   Execution context   ]
//  [   Execution context   ]
//  [   Execution context   ]
//  [   Global context      ]

//Execution Context
//Variable Object       Scope Chain     this

//Function declrations are scanned and made available
//Variable declrations are scanned and made undefined

tipper(15);
function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}
var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("25");

console.log(name);
var name = "Madan"

function sayName(){
    var name = "Mr. "
    console.log(name);
}
sayName();
console.log(name);