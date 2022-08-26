var a = [[1, 2], [3, 4]];
var b = [[4, 3], [2, 1]];

var res = [[], []];

for(let i = 0; i < 2; i++){
    for(let j = 0; j < 2; j++){
        res[i][j] = a[i][j] + b[i][j];
    }
}
console.log(res);