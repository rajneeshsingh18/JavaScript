//Primitive Data Types

/*
-->String
-->numbers
-->booleans
-->undefined
-->null
-->BigInt
-->Symbol

*/

let age = 22;
var name3 = "Rajneesh";

console.log(age);
console.log(typeof age);

console.log(firstName2, typeof firstName2);

//convert number to string
age = age + " ";
console.log(age, typeof age);

let age2 = String(45);
// age2 = string(age2); //Uncaught ReferenceError: string is not defined
console.log(age2, typeof age2);

//convert string to number

let myStr = +"34";
console.log(myStr, typeof myStr);

let year = "2023";
year = Number(year);
console.log(year, typeof year);

//string concatenation

// let string1 = +"17";
let string1 = "17";
let string2 = "23";

let newString3 = string1 + string2;
console.log(newString3, typeof newString3);

// 17 + 23  = 40
let newString4 = +string1 + +string2;
console.log(newString4, typeof newString4);
