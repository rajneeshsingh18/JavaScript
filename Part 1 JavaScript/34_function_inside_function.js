//function inside function

const app = () => {
  const myFunc = () => console.log("Hello world");

  const addTwoNumber = (num1, num2) => num1 + num2;

  const mul = (num1, num2) => num1 * num2;
  console.log("Inside app");

  myFunc();
};

app();
