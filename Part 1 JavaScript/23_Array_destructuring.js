const myArray = ["value1", "value2", "value3"];

let myvar1 = myArray[0];
let myvar2 = myArray[1];
console.log("Value of myvar1 is ", myvar1);
console.log("Value of myvar2 is ", myvar2);

//array destucturing

const cars = ["BMW", , "TESLA", "AUDI"];
let [variable1, variable2, variable3] = cars;
console.log("Value of Variable 1 is ", variable1);
console.log("Value of Variable 2 is ");
console.log("Value of Variable 3 is ", variable2);
console.log("Value of Variable 3 is ", variable3);

let myNewArray = myArray.slice(0);
console.log(myNewArray);

let [var1, var2, ...newVarArray] = cars; //--> ...newVarArray gives rest of elements is cars Array
console.log(var1);
console.log(var2);
console.log(newVarArray);
