//clone using Object.assign({} , object_name);

//memory --> heap memory

const obj1 ={
    key1 : "Value1",
    key2 : "Value2"
}

// const obj2 = obj1 ; //--> not a good way creates problem

//spread operator to clone object in better way
const obj2 = {...obj1};

//Another way to clone object
const obj3 = Object.assign({} , obj1);



obj1.key3 = "Value3";
console.log(obj1);
console.log(obj2);
console.log(obj3);
