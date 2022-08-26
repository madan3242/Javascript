 //JavaScript Program to Print All Prime Numbers in an Interval

 const low = 10;
 const high = 50;

 console.log(`Prime numbers between ${low} and ${high} are :`);

 for(let i =low; i <= high; i++){
    let flag = 0;

    for(let j = 2; j < i ; j++){
        if(i % j == 0){
            flag = 1;
            break;
        }
    }

    if(i > 1 && flag == 0){
        console.log(i);
    }
}