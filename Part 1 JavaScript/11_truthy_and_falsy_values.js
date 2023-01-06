//fasly values
/*

-->false
-->""
-->null
-->undefiend
-->0 

*/

let firstName = "";

if (firstName) {
  firstName = "Rajneesh";
  console.log(firstName);
} else {
  console.log("firstName is Empty");
}

//truthy values
/*

-->"abc"
--> 1 ,-3 ,-2 ,etc.

*/

let myVar = "Raj";

if (myVar) {
  console.log(myVar);
} else {
  console.log("my variable is Empty");
}
