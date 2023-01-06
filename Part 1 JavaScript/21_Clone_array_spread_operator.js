//how to clone array

let array1 = ["item1", 2003, 365.23];
console.log(array1);

let array2 = ["item1", 2003, 365.23]; //not allowed to clone array

//.concat()

let array3 = [].concat(array1);
console.log(array3);

//.slice()
let array4 = array1.slice(0);
console.log(array4);

//spread operator --> [... array_name]

let array5 = [...array1];
console.log(array5);

let array6 = array1.slice(0).concat(["item2", "item3"]);
console.log(array6);

let array7 = [...array1, "car", "bike"];
console.log(array7);

let array8 = ["grapes", "hot dog"];
let array9 = [...array7, ...array8];
console.log(array9);
