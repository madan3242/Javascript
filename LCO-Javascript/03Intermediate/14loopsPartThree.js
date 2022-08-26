// for in and for of 
const names = [
    "Youtube",
    "Facebook",
    "Instagram",
    "Netflix",
    "Amazon"
];

// for of loop
// for (const iterator of object) {
    
// }

for(const n of names){
    console.log(n);
}

const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
    lco : "LearnCodeOnline"
};

// for in loop
for(const s in symbols){
    console.log(`Key is : ${s} and value is : ${symbols[s]}`);
}