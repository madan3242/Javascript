// Javascript Program to Solve Quadratic Equation

let root1, root2;

let a = 1;
let b = 1;
let c = 1;

//calculate descriminant
let discriminant = b * b - 4 * a * c;

//condition for real and different roots
if(discriminant > 0){
    root1 = (-b + Math.sqrt(b * b - 4 * a * c))/2 * a;
    root2 = (-b - Math.sqrt(b * b - 4 * a * c))/2 * a;
    //result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else if(discriminant == 0){
    //condition for real and equal roots
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else{
    //if roots are not real
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}