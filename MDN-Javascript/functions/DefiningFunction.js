function square(num){
    return num * num;
}

var result = square(5);
console.log(result);

// function functionName(parameter1, parameter2, ... parametern){
//     statements
//     return 
// }

// calling function
// functionName();
// functionName(arg1, arg2 ... argN);
// var name = functionName();

function myFunc(theObject) {
    theObject.make = 'Toyota';
    theObject.model = 'Camrey';
  }
  
  const mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
  };
  
  // x gets the value "Honda"
  const x = mycar.make;
  
  // the make property is changed by the function
  myFunc(mycar);
  // y gets the value "Toyota"
  const y = mycar.make;
  const z = mycar.model;
  console.log(z);

  function myFun(arr){
    arr[0] = 87;
  }
  
  var myArr = [47];
  console.log(myArr[0]);

  myFun(myArr);
  console.log(myArr[0]);