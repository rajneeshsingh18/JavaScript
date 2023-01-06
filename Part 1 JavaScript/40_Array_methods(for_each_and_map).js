//Array Methods

//--> .forEach();

const numbers = [4, 2, 5, 7];

function multiplyBy2(number, index) {
  console.log("Index is ", index);
  console.log(`${number} X 2 = ${number * 2}`);
}

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[3], 3);

for (let i = 0; i < numbers.length; i++) {
  multiplyBy2(numbers[i], i);
}

function multiplyBy4(number) {
  console.log(`${number} X 4 = ${number * 4}`);
}

numbers.forEach(multiplyBy4);

const array = [5,8,1,3,2,8];

array.forEach(function(number,index){
  console.log(`Index is ${index } and number is ${number}`);
});

const multiplyBy3 = ( num) =>{
  console.log(num * 3);

}
array.forEach(multiplyBy3);

const users = [
  {firstName : "Rajneesh" , age : 19},
  {firstName : "Raj" , age : 29},
  {firstName : "AAjuu" , age : 22},
  {firstName : "Kajuu" , age : 39},

]

users.forEach(function(users){
  console.log(users.firstName);
})


users.forEach(function(users){
  console.log(users.age);
})

for(let ele of users){
  console.log(ele.firstName);
}


users.forEach((ele)=>{
  console.log(ele.age)
})


//--> .map()

const a = [3,4,6,18,2];

const square = function(num){
  return num*num;
}

const squareNUmber = a.map(square);

console.log(squareNUmber);

const numbers2 = [2,5,6,2,1];
const squareNUmber2 = numbers2.map((num)=>{
  return num*num;
})

console.log(squareNUmber2);

const users_2 = [
  {firstName : "Rajneesh" , age : 19},
  {firstName : "Raj" , age : 29},
  {firstName : "AAjuu" , age : 22},
  {firstName : "Kajuu" , age : 39},

]

const userNameArray = users_2.map((ele)=>{
  return (ele.firstName );
});

console.log(userNameArray)

