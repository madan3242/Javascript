// JavaScript Program to Encode a String to Base64

const str = "Learning Javascript";

const result = window.btoa(str);
console.log(result);

const result1 = window.atob(result);
console.log(result1);