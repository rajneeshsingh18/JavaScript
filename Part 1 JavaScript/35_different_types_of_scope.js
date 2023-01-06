//Lexical scope

const myVar = "Value 1";

function myApp() {
  function myFunc() {
    const myVar = "Value 59";

    const myFunc2 = () => {
      console.log("Inside my func ", myVar);
    };

    myFunc2();
  }

  console.log(myVar);
  myFunc();
}

myApp();

//block scope vs function scope

/*
let and const are block scope 
var is function scope.
*/

{
  let lastName = "Singh";
  const firstName = "Rajneesh";
  console.log(firstName);
}

// console.log(lastName); //Uncaught ReferenceError: lastName is not defined

{
  const firstName = "Mohit";
  console.log(firstName);
}

// const firstName = "Rohan";
// console.log(firstName);

{
  var firstName2 = "harshit";
  console.log(firstName2);
}

console.log(firstName2);

if (true) {
  var firstName3 = "Raj";
  console.log(firstName3);
}

console.log(firstName3);

function myApp2() {
  console.log("Inside myApp2 function");
  if (true) {
    let firstName = "Rocky";
    // const firstName = "Rocky";

    console.log(firstName);
  }
  //   console.log(firstName); //Uncaught ReferenceError: firstName is not defined
}

myApp2();
