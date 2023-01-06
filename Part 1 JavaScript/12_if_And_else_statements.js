let age = 17;

if (age >= 18) {
  console.log("User can drive a car");
} else {
  console.log(`Your age is ${age} and You cannot drive a car.`);
}

let num = 13;
if (num % 2 == 0) {
  console.log("   Even");
} else {
  console.log(`Odd number`);
}

//nested if else

let winningNumber = 19;

/*
let userGuess = +prompt(" Guess a number ");

console.log(typeof userGuess, userGuess);

if (userGuess === winningNumber) {
  console.log("Your guess is right ");
} else {
  if (userGuess < winningNumber) {
    console.log("too low !!");
  } else {
    console.log("too high !! ");
  }
}
*/

/*
if
else if 
else if
else if
else
*/

let temprature = 30;

if (temprature < 0) {
  console.log("Extremely cold outside");
} else if (temprature < 16) {
  console.log("It is cold outside");
} else if (temprature < 25) {
  console.log("Weather is okay");
} else if (temprature < 35) {
  console.log("lets go for swim");
} else if (temprature < 45) {
  console.log("turn of AC");
} else {
  console.log("too hot");
}
