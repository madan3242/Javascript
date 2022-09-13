const myObj = new Object();
myObj.a = 5;
myObj.b = 12;
myObj.c = 8;

delete myObj.b;
console.log('b' in myObj);