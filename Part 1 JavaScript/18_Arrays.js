//Intro to Arrays [Mutable]

/*
-->Reference type (object)
-->ordered collection of items 
-->stored in contigueous memory location.
*/

//how to create array

let fruits = ["Apple", "Mango", "Grapes"];
console.log(fruits);

console.log(fruits[1]);

//use const to create array
const cars = ["BMW", "AUDI", "LAMBO", "HONDA"];
console.log(cars);

let numbers = [1, 7, 12, 73, 2];
let mixed = [2, 4, 6, 2, "Rajneesh", null, undefined];
console.log(numbers);
console.log(mixed);

fruits[1] = "Banana";
console.log(fruits);

//Array.isArray()  --> Important point
console.log(typeof fruits);

console.log(Array.isArray(fruits)); //true

let obj = {
  hello: 342,
};
console.log(obj);
console.log(Array.isArray(obj)); //false
