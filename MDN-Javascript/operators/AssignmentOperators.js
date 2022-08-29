//Assignment operators


//      Assignment 
//      x = f() 

//      Addition 
//      x += f() 
//      x = x+ f()

//      Substraction 
//      x -= f() 
//      x = x - f()

//      Multiplication 
//      x *= f() 
//      x = x * f()

//      Division 
//      x /= f() 
//      x = x / f()

//      Reminder
//      x %= f()
//      x = x % f()



//Assigning to properties

const obj = {};

obj.x = 3;
console.log(obj.x);
console.log(obj);

const key = "y";
obj[key] = 5;
console.log(obj[key]);
console.log(obj);

const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.

// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
// let x = f();

// x = g(); // Reassigns the variable x to the result of g().

function f () {
    console.log('F!');
    return 2;
  }
  function g () {
    console.log('G!');
    return 3;
  }
  let x, y;

  y = x = f();

  y = [ f(), x = g()];
  console.log(y);
  console.log(x);

  x[f()] = g();
  console.log(x);


// Avoid assignment chains
// const z = y = x = f();
