const user = {
    firstName : "Rajneesh" ,
    address1 : {},
    // address : { houseNumber : "678A"},

}

console.log(user?.firstName); //"rajneesh"
// console.log(user.address.houseNumber); //Uncaught TypeError: user.address is undefined
console.log(user.address1.houseNumber); //undefined
console.log(user?.address?.houseNumber); //undefined


