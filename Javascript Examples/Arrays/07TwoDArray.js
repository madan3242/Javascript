var arr =[
    [1, 2, 3, 4, 5],
    [3, 5, 4, 3, 2]
];

for(let a of arr){
    for(var b of a){
        console.log(b);
    }
}
console.log(arr);

const array = new Array(4);
const a = [];
for (let i = 0; i < array.length; i++) {
    a[i] = new Array(4);
    for (let j = 0; j < a[i].length; j++) {
        a[i][j] = `[${i}, ${j}]`;
        console.log(`${a[i][j]}`);
    }
    
} 


