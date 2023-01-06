const user1 = {
  emply1: "Raj",
  Id_user1: 37847,
};

const user2 = {
  emply2: "Ankur",
  Id_user2: 75473,
  gender: "male",
  hobbies: ["dancing", "singing"],
};

const employee_first = user1.emply1;
// const employee_second = user2[emply2]; //Uncaught ReferenceError: emply2 is not defined
const employee_second = user2["emply2"];

console.log(employee_first, employee_second);

//shortcut method  or we can say object_destructuing
const { emply1, Id_user1 } = user1;
console.log(emply1, Id_user1);

const { emply2: Emply_2, Id_user2: User_2, ...rest_properties } = user2;
console.log(Emply_2, user2);
console.log(rest_properties);
