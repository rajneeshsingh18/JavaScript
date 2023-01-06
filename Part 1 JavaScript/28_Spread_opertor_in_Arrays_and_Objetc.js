//spread operator in arrays

const array1 = [1, 6, 2, 4];
const array2 = [5, 9, 2];

const newArray = [array1, array2, 425, 2552];
console.log(newArray);
const newArray2 = [...array1, ...array2, 425, 2552];
console.log(newArray2);

const newString = [..."Rajneesh"];
console.log(newString);

//spread operator in objects

const person1 = {
  name: "Rajneeh",
  age: 19,
  gender: "Male",
};

const person2 = {
  name2: "Rahul",
  age2: 22,
  gender2: "Male",
};

const newObj = [person1, person2, { key: "pair" }, { key2: "pair2" }];
console.log(newObj); //basically it is a array

// let newObj2 = [...person1, ...person2]; //Uncaught TypeError: person is not iterable
const newObj2 = { ...person1, ...person2, key69: "value69" };
// const newObj2 = { ...person2, ...person1 };

console.log(newObj2);

const newStringObj = { ..."Rajneesh" };
console.log(newStringObj);

const arrayObject = { ...["item1 ", "item2"] };
console.log(arrayObject);
