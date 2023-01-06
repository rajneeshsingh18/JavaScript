//primitive data types

let num1 = 6;
let num2 = num1;

console.log("Value of num1 is ", num1);
console.log("Value of num2 is ", num2);
num1++;
console.log(
  "After incrementing num1 value of num1 incremented but not num2 beacuse of stack used in it"
);
console.log("Value of num1 is ", num1);
console.log("Value of num2 is ", num2);
//In stack both variable num1 and num2 have differnet address to store values.

//reference datatypes -->Arrays

let array1 = ["Item1", "Item2"];
let array2 = array1;

console.log("Array1 ", array1);
console.log("Array2 ", array2);
array1.push("item3");
console.log("After pushing element to array 1 ");
console.log("Array 1 ", array1);
console.log("Array 2 ", array2);

//In stack array has different pointers but while pointing in heap memory they point to array having one same address.
