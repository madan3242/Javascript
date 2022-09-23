let marks = [35, 56, 87, 55, 34, 32, 54, 23];

let sortedMarks = marks.map((m) => {
    if(m >= 35){
        return m;
    }
    return NaN
})

let marks2 = marks.filter((m) => {
    if(m >= 35){
        return m;
    }
})

console.log(marks2);

console.log(sortedMarks);