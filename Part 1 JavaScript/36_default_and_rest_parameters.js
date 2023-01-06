//default parameters

const addTwoNumber = (num1, num2 = 5) => num1 + num2;

console.log("Sum of two number is ", addTwoNumber(3, 5));
console.log("Sum of two number is ", addTwoNumber(8));

//rest parameters

const myFunc = (a, b, ...c) => {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
};

myFunc(2, 5, 1543, 442, 12);

const addAllNumbers = (...numbers) => {
  let total = 0;
  console.log(numbers);
  console.log(Array.isArray(numbers));
  for (let number of numbers) {
    total += number;
  }
  return total;
};

const ans = addAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(ans);
