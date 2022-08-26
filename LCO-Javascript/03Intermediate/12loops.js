//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const myStates = [
    "Karnataka", 
    "Telangana",
    1985, 
    "Kerala", 
    1999,
    "Maharastra"
];

//continue break

for(let i = 0; i < myStates.length; i++){
    if(typeof myStates[i] === 'number')
        continue;
    console.log(myStates[i]);
}

var i = 0;
for(;;){
    if(i > 3) break;
    console.log(i);
    i++;
}

// while do-while 
let i = 0;
while(i < myStates.length){
    console.log(myStates[i]);
    i++;
}

do {
    console.log(i);
    i++
} while (i < 10);