//function returning function

function myFunc() {
  return { name: "raj" };
}

const ans = myFunc();
console.log(ans);

function HiThere() {
  function hello() {
    console.log("hello world");
  }

  return hello;
}

const ans2 = HiThere();
console.log(ans2);
ans2();

// function hi() {
//   return hello2(){
//     console.log("Inside hello2 function");
//   }
// }

// hi();
