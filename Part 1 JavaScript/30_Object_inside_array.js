//object inside array  very useful in real world application

const users = [
  { userId: 1, firstName: "Rajneesh", gender: " male" },
  { userId: 2, firstName: "Mayank", gender: " male" },
  { userId: 3, firstName: "Nikhil", gender: " male" },
];

for (let item of users) {
  //   console.log(item.userId);
  console.log(item);
  //   console.log(item.firstName);
}

//nested destructuring

const [user1, user2, user3] = users;
console.log(user2);

const [{ firstName }, , { gender }] = users;
console.log(firstName);
console.log(gender);

const [{ firstName: user1firstName, userId }, , { gender: user3gender }] =
  users;
console.log(user1firstName);
console.log(userId);
