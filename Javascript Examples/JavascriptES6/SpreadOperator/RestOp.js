function add(...a){
    var sum = 0;
    for(x of a){
        sum += x;
    }
    // console.log(sum);
    return sum;
}

add(10)
add(10, 20)
add(10, 20, 30);
add(10, 20, 30, 40);
add(10, 20, 30, 40, 50);
console.log(add(10, 20, 30, 40));
console.log(add(10, 20, 30, 40, 50));