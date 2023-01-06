//sort Method [See ASCII table]

const numbers = [5,9 ,1200 , 410 ,3000];
//["5" ,"9" , "1200" ,"410" , "3000"] //-->As a String

//[53 , 57 , 49 , 52, 51 ] => ASCII value of front Char of String


numbers.sort();
console.log(numbers); //Not Perfect way of sorting

const userName = [ "Rajneesh"  , "Rohan " ,"Abc" ,"Lmn"];
userName.sort(); //same as in Dictionary
console.log(userName);

const numbers2 = [5,9 ,1200 , 410 ,3000];

const ascending_order = numbers2.sort((a,b) => a-b);
console.log(ascending_order);

const desending_order = numbers2.sort((a,b) => b-a);
console.log(desending_order);

/*
 a     b
1200 , 400
a-b --> 790
a-b --> positive --> b,a 
400 , 1200
*/

/*
  a     b
1200 , 400
b-a --> -800
b-a --> negative --> a,b
1200 , 400
*/


const userCart = [
    {productId : 1 , productName : "Mobile" , price : 12000},
    {productId : 2 , productName : "Tv" , price : 10500},
    {productId : 3 , productName : "Laptop" , price : 42000},  
    {productId : 4 , productName : "Earbuds" , price : 2000},  

]

// sorting low to high  price

userCart.sort((a,b)=>{
    return a.price - b.price;
})

console.log(userCart);

//or

const lowToHigh = userCart.slice(0).sort((a,b)=>{
    return a.price - b.price;
})
console.log(lowToHigh)

const HighTolow = userCart.slice(0).sort((a,b)=>{
    return b.price - a.price;
})
console.log(HighTolow)
