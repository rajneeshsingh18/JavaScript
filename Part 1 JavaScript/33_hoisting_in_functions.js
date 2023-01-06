//hoisting in function

hello(); //function prototype

function hello() {
  console.log("Hello world");
}

// HiThere();

// const HiThere = function () {
//   console.log("Hi there is JS !!");  //Uncaught ReferenceError: can't access lexical declaration 'HiThere' before initialization
// };

console.log(hello2); //not allowed

const hello2 = "hello world";
console.log(hello2);
