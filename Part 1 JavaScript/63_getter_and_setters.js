//getter and setter

class CreateUser{
    constructor(firstName , lastName , age){
        this.firstName= firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //getter
    get fullName(){
        return `${this.firstName} ${this.age}`;
    }

    //setter

    setName(firstName, lastName){
        this.firstName= firstName;
        this.lastName = lastName;
    }

    set fullName(fullName){
        //fullName.split(" ")
        //[Mohit , Singh]

        const [firstName ,lastName] = fullName.split(" ");
        this.firstName=firstName;
        this.lastName = lastName;
    }
}

const user1 = new CreateUser("Rajneesh" ,"Singh" , 19);
// console.log(user1.fullName());
console.log(user1.fullName) ; //Because of get keyword as a property

user1.setName("Ankur" ,"Kumar");

// user1.firstName="Mohan";
// user1.lastName="Mn";

console.log(user1.firstName);
console.log(user1.lastName);

const user2 = new CreateUser("Yashwant" ,"Jh" , 20);
user2.fullName = "Rockys House";
// user2.fullName = " Rockys House";

console.log(user2);
console.log(user2.lastName);

