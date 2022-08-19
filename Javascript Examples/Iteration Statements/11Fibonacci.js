var n = 17, firstTerm = 0, secondTerm = 1;

console.log("Fibonacci series till " +n+ " term :");
for (let i = 0; i < n; i++) {
    console.log(firstTerm);

    var nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}