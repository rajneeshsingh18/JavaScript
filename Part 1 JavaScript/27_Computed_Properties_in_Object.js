const key1 = "Obj Key1";
const key2 = "Obj Key2";

const value1 = "My Vlaue 1";
const value2 = "My Vlaue 2";

const obj = {
  key1: value1,
  key2: value2,
};

console.log(obj);

const new_obj = {
  [key1]: value1,
  [key2]: value2,
};
console.log(new_obj);

const obj2 = {};

obj2[key1] = value1;
obj2[key2] = value2;
console.log(obj2);
// console.log(obj2.length); //undefined
