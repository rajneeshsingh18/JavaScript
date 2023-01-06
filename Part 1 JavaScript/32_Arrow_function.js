//Arrow function

const sumOfThreeNUmbers = (num1, num2, num3) => num1 + num2 + num3;
console.log(sumOfThreeNUmbers(4, 61, 2));

const hello = () => console.log("Hello world");
hello();

const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(45));
console.log(isOdd(22));

//function to find a target element in a array

const findkey2 = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const array = [44, 5, 22, 2, 2, 5];
let ans2 = findkey2(array, 5);
console.log(ans2);

const table = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
};

table(4);
