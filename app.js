"use strict";
var num1Element = document.getElementById('number1');
var num2Element = document.getElementById('number2');
var buttonElement = document.querySelector('button');
var numArray = [];
var numString = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then(res => {
    console.log(res);
});
// console.log(add(5, 2));
// console.log(add('1', '5')); // shows error.
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const a = num1Element.value;
    const b = num2Element.value;
    const numRes = add(+a, +b);
    const stringRes = add(a, b);
    numArray.push(numRes);
    numString.push(stringRes);
    printResult({ val: numRes, timeStamp: new Date() });
    console.log(numArray);
    console.log(numString);
});
