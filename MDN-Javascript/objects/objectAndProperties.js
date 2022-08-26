//Objects and properties

// objectName.propertyName;

// const myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;


const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

console.log(myCar);
console.table(myCar);

// Unassigned properties of an object are undefined (and not null).

myCar.color; // undefined

//Properties of JavaScript objects can also be accessed or set using a bracket notation.
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;


// four variables are created and assigned in a single go,
// separated by commas
const myObj = {},
      str = 'myString',
      rand = Math.random(),
      anotherObj = {};

      
console.log(myObj);

// Now, creating additional properties.
myObj.type              = 'Dot syntax for a key named type';
myObj['date created']   = 'This key has a space';
myObj[str]              = 'This key is in variable str';
myObj[rand]             = 'A random number is the key here';
myObj[anotherObj]       = 'This key is object anotherObj';
myObj['']               = 'This key is an empty string';

console.log(myObj);
console.log(myObj.myString);


str = 'myString';
myObj[str] = 'This key is in variable str';

/*
[Log] Object
    : "This key is an empty string"
    0.8916485437228595: "A random number is the key here"
    [object Object]: "This key is object anotherObj"
    date created: "This key has a space"
    myString: "This key is in variable str"
    type: "Dot syntax for a key named type"
*/
// notice that in the log, the order of the properties listed is not the same as the order they were created.

// [Log] This key is in variable str

console.log(myObj.str); //[Log] undefined

console.log(myObj[str]); //[Log] This key is in variable str
console.log(myObj.myString); //[Log] This key is in variable str


let propertyName = 'make';
myCar[propertyName] = 'Ford';

// access different properties by changing the contents of the variable
propertyName = 'model';
myCar[propertyName] = 'Mustang';

console.log(myCar);

// [Log] {make: 'Ford', model: 'Mustang'}
