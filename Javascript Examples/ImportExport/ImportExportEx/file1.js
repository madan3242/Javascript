let num1 = 100;

let add = (x, y) =>{
    return x + y;
}

// ES6
// export default num1;
// export {num1, add};

// ES5
// module.exports = num1;
module.exports = {num1, add};

