const a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  const a2 = a.map(function(s) { return s.length; });
  
  console.log(a2); // logs [8, 6, 7, 9]
  
  const a3 = a.map((s) => s.length);
  
  console.log(a3); // logs [8, 6, 7, 9]

  
// No separate this
function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
  
    setInterval(function growUp() {
      // In nonstrict mode, the growUp() function defines `this`
      // as the global object, which is different from the `this`
      // defined by the Person() constructor.
      this.age++;
    }, 1000);
}
  
const p = new Person();

function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // `this` properly refers to the person object
    }, 1000);
  }
  
  const p1 = new Person();
  