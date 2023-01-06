//Arrow function and this

const person1 = {
    firstName : "Rajneesh" ,
    Age : 19 ,

    /*
    about : function(){
        console.log(this);
        console.log(this.firstName , this.Age);
    }
    */
    about : ()=>{
        // console.log(this);
        console.log(this.firstName , this.Age);
    }
}

person1.about(); //undefined unddefined

person1.about.call(person1); //undefined unddefined

