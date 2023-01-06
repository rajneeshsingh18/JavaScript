//Solution using object.create 

const obj1 = {
    key1 : 'Value1',
    key2 : 'Value2'
}

//There is one more way to create empty object

const obj2 = Object.create(obj1); //{}
console.log(obj2);  //Obj2 ka __proto__ obj1 hogaya hai

obj2.key3 = 'Value3';
 obj2.key2  = 'unique';

console.log(obj2);

//-->__proto__ or [[prototype]] --> Offical ECMAscript documentaion

console.log(obj2.__proto__); //create a relation

//Object.create()

const userMethods = {

    about : function(){
        return `${this.firstName} is ${this.age} years old. `;
    }
    ,
    is18 : function(){
        return this.age>=18;
    }
,
    sing : function(){
        return "La la la ala";
    }
}

function createUser(firstName , lastName , age){
    
    // const user = {};

    const user = Object.create(userMethods);

    user.firstName = firstName;
    user.lastName=lastName;
    user.age = age;

    return user;
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

