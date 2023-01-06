//Object

/*
--> Object : reference data type
--> array are good but not sufficent 
--> for real world data 
-->Object store key value pairs 
--> Object don't have index
*/

//how to create objects

const person = { name: "Rajneesh", age: 19 };
console.log(person);

const person2 = {
  name: "Yashwant",
  age: 20,
  hobbies: ["coding", "cricket", "Music addicted"],
};
console.log(person2);

//how to access data from objects
console.log(person2.name);
console.log(person2.age);
console.log(person2["hobbies"]);
// console.log(person2[hobbies]); //Uncaught ReferenceError: hobbies is not defined

//how to add key value pair to objects

//using dot notation
person2.gender = "male";
console.log(person2);

//using square bracket notation
person2["country"] = "India";
console.log(person2);
