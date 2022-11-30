const uno = () => {
    console.log("I am one");
};

const dos = () => {
    setTimeout(() => {
        console.log("Woooohooooo");
    }, 3000);
    console.log("I am two");
};

const tres = () => {
    console.log("I am three");
}

dos();
uno();
tres();