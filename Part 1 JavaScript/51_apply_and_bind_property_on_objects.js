//.apply() and .bind()

details = function(hobby , favMusician){
    console.log(this.firstName , this.age );
    console.log(hobby, favMusician);
}

const user1 = {
    firstName : "Rajneesh" ,
    age : 19 ,
    
}

const user2 = {
    firstName : "Mohit" ,
    age : 9 ,
   
}

details.apply(user1 , ["Guitar" , "Bach"]);
details.apply(user2 , ["Dance" , "MG5"]);

const myFunc = details.bind(user2 , "drifting" , "lambo");
const myFunc2 = details.bind(user1 , "Chess" , "grandmaster");

myFunc();
myFunc2();