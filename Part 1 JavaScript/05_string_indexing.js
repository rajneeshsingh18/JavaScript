let firstName = "Rajneesh";
//index  :   01234567

console.log(firstName[2]);
console.log(firstName[0]);
console.log(firstName[1]);

//length of string
console.log(firstName.length);

//get last index of a string
console.log(firstName[firstName.length - 1]);

//string methods : trim() ,toUpperCase() ,toLowerCase() etc.
//--> string are immutable in nature

let firstName2 = "Rajneesh";
console.log(firstName2);

let firstName3 = "  Rajn  eesh  ";
console.log(firstName3);
console.log(firstName3.length);

let newString = firstName3.trim(); //removes extra spaces from start and from end.
console.log(newString);
console.log(newString.length);

console.log(firstName2.toUpperCase());

console.log(firstName2.toLowerCase());

let newString2 = firstName2.slice(2, 5);
console.log(newString2);

console.log(firstName3.slice(1)); //give string without any change
