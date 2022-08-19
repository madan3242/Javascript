// Falsy values
// undefined
// null
// 0
// ''
// nan

var user = "2"
if (user) {
    console.log("Condition is ture");
}

console.log("2"+"2");

if (2 == user) {
    console.log("Condition is true");
}

if (2 === user) {
    console.log("Condition is true");
}
console.log("Hello");

// Truthy values 
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

//Falsy values
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
