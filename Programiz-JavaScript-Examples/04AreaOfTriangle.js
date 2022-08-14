// JavaScript Program to Calculate the Area of a Triangle

// Area When Base and Height is Known
var base = 7;
var height = 8;

areaT = 0.5 * base * height;
console.log("Area of triangle = "+areaT);

// Area When All Sides are Known

var side1 = 6;
var side2 = 5;
var side3 = 8;

// calculate the semi-perimeter
var sperimeter = (side1 + side2 + side3) / 2;

//calculate area

var areaValue = Math.sqrt(
    sperimeter * (sperimeter - side1) * (sperimeter - side2) * (sperimeter - side3)
);

console.log("Area of triangle  = "+areaValue);