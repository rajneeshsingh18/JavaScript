//difference between dot and bracket notation

const key = "Email";

const person = {
  name: "Rajneesh",
  age: 22,
  "Person hobbies": ["Guitar", "Sleeping", "Listening music"],
};

console.log(person["Person hobbies"]);

person.key = "abc@gmail.com";
person[key] = "abc2@gmail.com";

console.log(person);
