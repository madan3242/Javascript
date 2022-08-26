var op = '-';
var num1 = 65, num2 = 78;
var result;

switch(op){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        console.log(`Invalid operator`);
}

console.log(`${num1} ${op} ${num2} = ${result}`);