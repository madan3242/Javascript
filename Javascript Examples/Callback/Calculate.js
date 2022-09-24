let calculate = (a, b, operation) => {
    let result ="";
    if(operation == "sum"){
        return a + b;
    }
    if(operation == "mul")
        return a * b;
}

calculate(10, 20, "sum");

console.log(calculate(10, 20, "sum"));

calculate(10, 20, "mul");

console.log(calculate(10, 20, "mul"));
