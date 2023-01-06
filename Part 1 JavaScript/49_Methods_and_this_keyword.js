//Methods and this keyword 

//--> Function inside object

const person = {
    firstName : 'Rajneesh' ,
    age : 19,


    about : function(){
        console.log("Person is Rajneesh and person age is 19");
    }
    ,
    details : function(){
        console.log(`Person is ${this.firstName} and person age is ${this.age}`);
    }
}

const person_2 = {
    firstName : 'Ramu' ,
    age : 9,
    
    details : function(){
        console.log(`Person is ${this.firstName} and person age is ${this.age}`);
    }
}

console.log(person.firstName);
console.log(person.age);
person.about();
person.details();

person_2.details();


//short syntax to create method

const person1= {
    firstName : "Rohan",
    age : 12,

    about(){
        console.log(this.firstName ,this.age);
    }
}

person1.about();