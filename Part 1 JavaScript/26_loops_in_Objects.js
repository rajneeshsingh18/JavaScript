//how to iterate object

const person = {
  name: "Rajneesh",
  age: 22,
  "Person hobbies": ["Guitar", "Sleeping", "Listening music"],
};

//for in loop -->FOR IN
for (let key in person) {
  //   console.log(person.key); // undefined
  console.log(person[key]);
}

//printing both key value pair together using for in loop
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}
