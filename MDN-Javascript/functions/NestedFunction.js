function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  const a = addSquares(2, 3); // returns 13
  const b = addSquares(3, 4); // returns 25
  const c = addSquares(4, 5); // returns 41

  
  function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  const result = fnInside(5); // returns 8
  const result1 = outside(3)(5); // returns 8

// Multiply-nested functions
function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
}
A(1); // logs 6 (1 + 2 + 3)

//Name conflicts
function outside(){
    const x = 5;
    function inside(x){
        return x * 2;
    }
    return inside;
}

const a1 = outside()(10);
console.log(a1);
// VM5461:2 20