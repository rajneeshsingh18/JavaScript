let fruits = ["Apple", "Grapes ", "Mango", "Banana"];

//print each element of array using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits.length);

console.log(fruits[fruits.length - 2]); //gives last second element

let fruits2 = [];
for (let j = 0; j <= fruits.length - 1; j++) {
  fruits2.push(fruits[j].toUpperCase());
}

console.log(fruits2);

//Use const to create array

const cars = ["BMW", "Audi", "Lambo"];
//cars = ["item4", "item5"]; //Uncaught TypeError: invalid assignment to const 'cars'

let cars2 = ["Audi", "BMW23", "Lamb32o"];
cars2 = ["item4", "item5"];
console.log(cars2);

//therfore prefer const to create an array

//while loop in array

let k = 0;
while (k < cars.length) {
  console.log(cars[k]);
  k++;
}

const new_array = [];

let l = 0;
while (l < cars.length) {
  new_array.push(cars[l].toUpperCase());
  l++;
}

console.log(new_array);

//for of loop in array --> FOR OF

const bike = ["Honda", "Hero", "Yamaha"];
const new_bikes = [];

for (let item of bike) {
  new_bikes.push(item.toUpperCase());
}
console.log(new_bikes);

//for in loop in array --> FOR IN

const new_array2 = [];
for (let index in bike) {
  console.log(bike[index]);
  new_array2.push(bike[index].toUpperCase());
}

console.log(new_array2);
