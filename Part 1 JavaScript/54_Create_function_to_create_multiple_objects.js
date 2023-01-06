//Create function to create multiple objects

/*
--> function(that function create object)
-->Add key value pair
-->object  ko return karega

*/

function createUser(firstName , lastName , age , address , email){
    
    const user = {};
    user.firstName = firstName;
    user.lastName=lastName;
    user.age = age;
    user.address = address;
    user.email = email;

    user.about = function(){
        return `${this.firstName} is ${this.age} years old. `;
    }

    user.is18 = function(){
        return this.age>=18;
    }

    return user;
}

const user1 = createUser("Rajneesh" , "Singh" ,19 ,"66A" ,"Abc@gmail.com");
const user2 = createUser("Mohan" , "Singal" ,9 ,"88a" ,"Mohanc@gmail.com");

console.log(user1.firstName);
console.log(user2.firstName);
console.log(user1.is18());
console.log(user2.is18());

const details1 = user1.about();
console.log(details1);

const details2 = user2.about();
console.log(details2);


