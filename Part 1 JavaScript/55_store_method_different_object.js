
//Store methods in different object

const userMethods = {

    about : function(){
        return `${this.firstName} is ${this.age} years old. `;
    }
    ,
    is18 : function(){
        return this.age>=18;
    }
}

function createUser(firstName , lastName , age , address , email){
    
    const user = {};
    user.firstName = firstName;
    user.lastName=lastName;
    user.age = age;
    user.address = address;
    user.email = email;

    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    return user;
}


const user1 = createUser("Rajneesh" , "Singh" ,19 ,"66A" ,"Abc@gmail.com");
const user2 = createUser("Mohan" , "Singal" ,9 ,"88a" ,"Mohanc@gmail.com");

console.log(user1.about());
console.log(user1.is18());

console.log(user2.about());
console.log(user2.is18());


