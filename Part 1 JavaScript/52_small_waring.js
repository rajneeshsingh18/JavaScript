//small warning

const user1 = {
    firstName : "Rajneesh" ,
    age : 19 ,
    about : function(hobby){
        console.log(this.firstName , this.age );
        console.log(hobby);
    }
}

//don't do this mistake

const myFunc = user1.about;
const myFunc2= user1.about.bind(user1 ,"Dance");

myFunc();
myFunc2();