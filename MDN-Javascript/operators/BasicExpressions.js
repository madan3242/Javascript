

//this 
this['propertyName']
this.propertyName

//Grouping operator ( )

const a = 1;
const b = 2;
const c = 3;

// default precedence
a + b * c; // 7

// evaluated by default like this
a + (b * c) // 7

// now overriding precedence
// addition before multiplication
(a + b)*c // 9

// which is equivalent to
a * c + b * c // 9

// new

const objectName = new objectType(param1, param2, /* …, */ paramN);

// super

super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);