//.call() on objects

const user1 = {
    firstName : "Rajneesh" ,
    age : 19 ,
    about : function(hobby){
        console.log(this.firstName , this.age );
        console.log(hobby);
    }
}

const user2 = {
    firstName : "Mohit" ,
    age : 9 ,
   
}

user1.about("Dance");
user1.about(user1 , "Dance");

// user1.about.call();

user1.about.call(user2 );
user1.about.call(user2  ,"Singing");
