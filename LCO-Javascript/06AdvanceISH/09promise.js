const uno = () => {
    console.log("I am one");
};

// const dos = () => {
//     setTimeout(() => {
//         console.log("Woooohooooo");
//     }, 3000);
//     console.log("I am two");
// };

const dos = () => {
    return new Promise((resolve, reject) => {
        resolve('I got that')
        setTimeout(() => {
            console.log("Woooohooooo");
        }, 3000);
    })
};

const tres = () => {
    console.log("I am three");
};

const callMe = async() => {
    let valOne = uno();
    console.log(valOne);
    
    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callMe();