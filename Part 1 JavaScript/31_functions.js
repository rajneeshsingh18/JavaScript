//declaration

function singHappyBirthday() {
  console.log("Happy birthday to You ....");
}

singHappyBirthday();
singHappyBirthday();

function sum() {
  return 8 + 1;
}

const returened_value = sum();
console.log(returened_value);

//function with parameters

function sumOfTwoNUmbers(num1, num2) {
  return num1 + num2;
}

const ans = sumOfTwoNUmbers(23, 17);
console.log(ans);

console.log(undefined + undefined); //not a number --> NaN

console.log(2 + 3 + undefined);

//function to check weather a number is even or odd

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`45 is even : ${isEven(45)}`);
console.log(isEven(12));

console.log(12 % 7 === 0);

//function to extract first character from string

function first_char(anyString) {
  return anyString[0];
}

const string_first_char = first_char("Rajneesh");
console.log(string_first_char);
console.log(first_char("Mohan"));

//function to find a target element in a array

function findKey(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const a = [4, 8, 28, 26, 95];
let index = findKey(a, 28);
console.log(`Key is found at index ${index}`);

//function expression

const sumOfThreeNUmbers = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

console.log(sumOfThreeNUmbers(4, 6, 2));

const hello = function () {
  console.log("Hello world");
};

hello();

const isOdd = function (num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isOdd(45));
console.log(isOdd(22));

//function to find a target element in a array

const findkey2 = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const array = [44, 5, 22, 2, 2, 5];
let ans2 = findkey2(array, 2);
console.log(ans2);
