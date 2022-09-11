// Default parameters


// function multiply(a, b) {
//     b = typeof b !== 'undefined' ?  b : 1;
//     return a * b;
//   }
  
//   multiply(5); // 5

function multiply(a, b = 1){
    return a * b;
}

multiply(4);

// Rest parameters
function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
  }
  
  const arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]
  

