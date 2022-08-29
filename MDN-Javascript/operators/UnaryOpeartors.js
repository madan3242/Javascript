
//delete

delete object.property;
delete object[propertyKey];
delete objectName[index];

delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = {h: 4};
delete myObj.h; // returns true (can delete user-defined properties)

//typeof operator

typeof operand

const myFun = new Function('5 + 2');
const shape = 'round';
const size = 1;
const foo = ['Apple', 'Mango', 'Orange'];
const today = new Date();


typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"

typeof true; // returns "boolean"
typeof null; // returns "object"

typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"

typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"

typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"

typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"


// void operator

void (expression)
void expression
