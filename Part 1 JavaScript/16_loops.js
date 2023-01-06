//while loop

let num1 = 1;
while (num1 <= 5) {
  console.log(num1);
  num1++;
}
console.log(`Current value of num1 is ${num1}`);

let num = 0;
let sum = 0;
while (num <= 10) {
  sum = sum + num;
  num++;
}
console.log(`Sum of number upto 10 is ${sum}`);

//sum of n natural number -->  n(n+1)/2
let num2 = 10;
let total = (num2 * (num2 + 1)) / 2;
console.log(`Sum of number upto 10 is ${total}`);

//Intro to for loops

//--> print 0 to 9

let i;
for (i = 0; i <= 9; i++) {
  console.log(i);
}
console.log(`Current value of i is ${i} (using for loop)`);

let num3 = 10;
let total_ = 0;
for (let j = 0; j <= num3; j++) {
  total_ += j;
}
console.log(`Sum of number upto 10 is ${total_} (using for loop)`);

//do while loop -->executed once then check conditions

let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 7);

console.log(`Current value of k is ${k} (using for do while loop)`);
