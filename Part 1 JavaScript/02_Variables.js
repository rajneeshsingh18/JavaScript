"use strict";
// Benefits of using “use strict”

/*It’s easier to write "secure" JavaScript codes.

A programmer will not receive any error feedback assigning values to non-writable properties.
*/
var firstName = "Rajneesh";
console.log(firstName);

firstName = "Mohit";

console.log(firstName);

//used strict
// value1 = 2; //-->Uncaught ReferenceError: assignment to undeclared variable value1

var value1 = 2;
console.log(value1 * 4);
console.log(value1 ** 2);

var _firstName = "Raj";
console.log(_firstName);
// var 1value = 3; //-->Uncaught SyntaxError: identifier starts immediately after numeric literal
var first_name = "Rohan";
console.log(first_name);
var firstName2 = "Ramu";
console.log(firstName2);
