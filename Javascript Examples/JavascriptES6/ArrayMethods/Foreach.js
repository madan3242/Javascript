let marks = [35, 33, 39, 34, 37];

marks.forEach((m) => {
    console.log(m);
})
let x = marks.forEach((m)=>{
    return m + 1;
})

console.log(x); // undefined