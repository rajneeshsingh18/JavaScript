//What is prototype?

function hello(){
    console.log("hello world") ;
}
console.log(hello.prototype);

// javascript function --> function + object

//name property --> tells function name ;
console.log(hello.name);

//You can Add your own properties
hello.myOwnProperty = "very uniqe value" ;
console.log(hello.myOwnProperty);

// function provide free space --> {} which is prototype

hello.prototype.abc = "Abc value";
hello.prototype.xyz = "xyz value";

hello.prototype.sing = function(){
    return "la la la la ola";
}


//Only function provides prototype property
console.log(hello.prototype);
console.log(hello.prototype.sing);
console.log(hello.prototype.sing());


//Only function provides prototype property

if(hello.prototype){
    console.log("Protype is present");
}else{
    console.log("Prototype is not present");
}


const car = [ "bms " ,"msk"];
if(car.prototype){
    console.log("Protype is present");
}else{
    console.log("Prototype is not present");
}


// another full fledge example of prototype

    


function createUser(firstName , lastName , age){
    
    // const user = {};

    // const user = Object.create(userMethods);

    const user = Object.create(createUser.prototype);

    user.firstName = firstName;
    user.lastName=lastName;
    user.age = age;

    return user;
}

createUser.prototype.about =  function(){
    return `${this.firstName} is ${this.age} years old. `;
}

createUser.prototype.is18 = function(){
    return this.age>=18;
}

createUser.prototype.sing = function(){
    return "La la la ala";
}


const user1 = createUser("Rajneesh" , "Singh" ,19 ,"66A" ,"Abc@gmail.com");
const user2 = createUser("Mohan" , "Singal" ,9 ,"88a" ,"Mohanc@gmail.com");

console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log("User1 Singing : " ,user1.sing());

console.log(user2);
console.log(user2.about());
console.log(user2.is18());
console.log("User2 Singing : " ,user2.sing());

