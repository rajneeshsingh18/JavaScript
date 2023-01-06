//2015 / ES6 --> Introduced class keyword

class CreateUser{
    constructor(fisrtName , lastName , age){
        console.log("Constructor called");
        this.fisrtName= fisrtName;
        this.lastName = lastName;
        this.age = age;
    }

    about(){
        return `${this.fisrtName} is ${this.age} years old`;
    }

    is18(){
        return this.age >= 18 ;
    }

    sing(){
        return " la la la ola";
    }
}

const user1 = new CreateUser("Rajneesh " ,"Singh" , 19);
console.log(user1.about);
console.log(user1.about());
console.log(user1.is18())
console.log(Object.getPrototypeOf(user1));
