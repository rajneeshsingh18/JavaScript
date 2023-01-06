// push() , pop() , shift() , unshift() , .length

// shift() --> remove a element in starting of array
//unshift() --> add a element from starting of array.

//push() and pop() are faster than shift() ,unhift()

let fruits = ["Apple", "Mango", "Grapes"];
console.log(fruits);
console.log(fruits.length);

//push()
fruits.push("Banana");
console.log(fruits);

//pop()
fruits.pop();
console.log(fruits);

let poped_element = fruits.pop();
console.log(poped_element, typeof poped_element);
console.log(fruits);

//unshift()

let cars = ["Amaze", "Swift", "Audi Q7", "S class"];
console.log(typeof cars, cars);
console.log(Array.isArray(cars));

cars.unshift("lambo");
cars.unshift("Tigor");
console.log(cars);

//shift()
cars.shift();
console.log(cars);

let shifted_element = cars.shift();
console.log(shifted_element);
console.log(cars);
