//most important
//-->used in react
//--> mostly on objects

const person = {
  name: "Rajneesh",
  age: 19,
  gender: "Male",
};

function printDetails(obj) {
  console.log(obj.name);
  console.log(obj["gender"]);
  //   console.log(obj[gender]); //Uncaught ReferenceError: gender is not defined
  console.log(obj.age);
}

printDetails(person);

function print({ name, age, gender }) {
  console.log(name);
  console.log(age);
  console.log(gender);
}

const person2 = {
  name: "Mohit",
  age: 22,
  gender: "Male",
};

print(person2);
