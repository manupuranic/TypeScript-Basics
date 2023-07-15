var num1Element = document.getElementById('number1') as HTMLInputElement;
var num2Element = document.getElementById('number2') as HTMLInputElement;
var buttonElement = document.querySelector('button')!;

var numArray: number[] = [];
var numString: string[] = [];

function add(num1: number | string, num2: number | string) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000)
})

myPromise.then(res => {
    console.log(res);
})

// console.log(add(5, 2));
// console.log(add('1', '5')); // shows error.

function printResult(resultObj: { val: number; timeStamp: Date }) {
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', () => {
    const a = num1Element.value;
    const b = num2Element.value;
    const numRes = add(+a, +b);
    const stringRes = add(a, b)
    numArray.push(numRes as number);
    numString.push(stringRes as string);
    printResult({ val: numRes as number, timeStamp: new Date() });
    console.log(numArray);
    console.log(numString);
})