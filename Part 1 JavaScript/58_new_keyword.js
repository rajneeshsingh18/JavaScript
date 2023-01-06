//new keyword

//-->empty object , this = {}
//-->return this
//-->Object.create(createUser.prototype);

//all things above mentioned done automatically by new keyword

function createUser(firstName , age){
    this.firstName = firstName;
    this.age= age;
}

//object or instance variable
const user1 = new createUser("Rajneesh" , 19);
console.log(user1);