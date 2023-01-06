//Map data stucture 

/*
-->Map is an iterable
-->Stores data in orerded fashion

-->Store key value pair (like object)
-->Duplicate keys are not allowed like objects

////////////////////////
-->Different between maps & objects
-->Object can only have string and symbol as keys

-->In maps you can use anything as key 
-->like array , number , string
*/

//Object literal
// Key --> string 
// key --> symbol

//example :
const person = {
    firstName : "Rajneesh" ,
    age : 19 ,
    1 : "one"
}

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person[1]);

for(let key in person){
    // console.log(key)
    console.log(key , typeof key);
}


//whereas in Maps --> key can be of any datatype

const person2 = new Map();

person2.set("firstName" ,"Rajneesh");
person2.set("Age" , 19);
person2.set(1 , "one") ;
person2.set([1,2,4] ,'one two three');
person2.set({Email : "abc@gmail.com"} , "Mail")
console.log(person2);


console.log(person2.get("Age"));
// console.log(person2.get("[1,2,4]")); //undefined 
console.log(person2.get("firstName"));

console.log(person2.keys()); //Map Iterator 

//.keys()
for(let key of person2.keys()){
    console.log(key , typeof key);
}


//For of Loop in map
for(let key of person2){
    // console.log(key , typeof key);
    console.log(Array.isArray(key)); //5 times true
}

// for(let key , value of  person2){  //-->Uncaught SyntaxError: missing ; after for-loop initializer
//     console.log(key,value);
// }


//using array destructuring
for(let [key , value] of person2){
    console.log(key , value);
}

console.log(person2);


const person3 = {
    id : 1,
    firstName : "Ankur" ,
}

const userInfo = new Map();

// adding object inside object
userInfo.set(person3 , { age : 8 , gender : "Male"});

console.log(userInfo);
console.log(person3.id);
console.log(userInfo.get(person3));
console.log(userInfo.get(person3).age);
















