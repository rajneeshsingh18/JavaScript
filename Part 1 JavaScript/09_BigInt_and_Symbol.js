let num1 = 72329;
console.log(typeof num1, num1);

let myNum = BigInt(9008239502708939);
console.log(typeof myNum, myNum);

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

let myNumber = BigInt(12);
let myNum2 = 1672n;
let myNum3 = 435;
console.log(myNumber);

console.log(myNumber + myNum2);

// console.log(myNumber + myNum3); //Uncaught TypeError: can't convert BigInt to number
