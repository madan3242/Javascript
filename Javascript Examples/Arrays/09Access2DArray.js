var array = [[1, 2, 3, 4, 5], [3, 5, 6, 3]];
console.log(array);

for(var a of array){
    for(var b of a){
        console.log(b);
    }
}

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(`array[${i}][${j}] = ${array[i][j]}`);
    }
}