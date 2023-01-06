//callback function

function myFunc2(name) {
  console.log("Inside function 2");
  console.log(`Your name is ${name}`);
}

function myFunction(callback){
  console.log("Hello there I am a funct & I can ..");
  //   callback();
  callback("rajneesh");
}

myFunction(myFunc2);
