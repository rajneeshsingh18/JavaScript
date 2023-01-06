//Sets (it is iterable)

//--> stores data linearly
//--> sets also have its own methods
//-->no index based access
//-->order is not gurannted
//-->unique item only ( no duplicated allowed)


const numbers = new Set([1,56,2,3,3]);
console.log(numbers);

console.log(numbers[1]); //undefined -->index base access not allowed

const items = [ 'item1' ,'item2' ,'item3'];

//.add()  methdod
numbers.add(5);
numbers.add(99);
numbers.add(items);
numbers.add(items); //dupliacted not allowed
numbers.add(['abs' , 'babs']);
numbers.add(['raj','jab']);

console.log(numbers);

//.has() method-->true / false

if(numbers.has(4)){
    console.log("4 is presnt");
}else{
    console.log("4 is not presnt");
}


for(let num of numbers){
    console.log(num);
}

//unique elements from array using sets
const myArray = [1,2,4,4,45,6,1,3,4,5,5];
const unique_element = new Set(myArray);

console.log(unique_element);
// console.log(unique_element.length); 


let length = 0;
for( ele of unique_element){
    length++;
}
console.log(length);