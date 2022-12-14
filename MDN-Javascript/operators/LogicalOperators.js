//Logical operators

// Logical AND &&
expr1 && expr2;

const a1 =  true && true; // t && t returns true
const a2 =  true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && (3 === 4); // f && f returns false
const a5 = 'Cat' && 'Dog'; // t && t returns Dog
const a6 = false && 'Cat'; // f && t returns false
const a7 = 'Cat' && false; // t && f returns false


// Logical OR ||
expr1 || expr2;

const o1 =  true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 =  true || false; // t || f returns true
const o4 = false || (3 === 4); // f || f returns false
const o5 = 'Cat' || 'Dog'; // t || t returns Cat
const o6 = false || 'Cat'; // f || t returns Cat
const o7 = 'Cat' || false; // t || f returns Cat


// Logical NOT !
!expr1;

const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !'Cat'; // !t returns false


//Short-circuit evaluation

// false && anything is short-circuit evaluated to false.
// true || anything is short-circuit evaluated to true.