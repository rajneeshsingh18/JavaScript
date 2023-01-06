//some method --> .some() --> true or false

//--> Kya ek bhi number esa hai jo even hai
//true

const numbers = [3,26,8,54,22];

const ans =numbers.some((num)=> num%2===0);
console.log(ans);

const userCart = [
    {productId : 1 , productName : "Mobile" , price : 12000},
    {productId : 2 , productName : "Tv" , price : 10500},
    {productId : 3 , productName : "Laptop" , price : 42000},  
    {productId : 4 , productName : "Earbuds" , price : 2000},  
]

const answer = userCart.some((cartItem)=> cartItem.price > 20000);
console.log(answer);

const answer2 = userCart.some((cartItem)=> cartItem.price < 2000);
console.log(answer2);


//fill method --> .fill()

// value , start , end

const array = [3,2,565,53,1,4,2];
console.log(array);

array.fill(7,3,5);
console.log(array);

array.fill(2,0,array.length-1);
console.log(array);


//splice method --> ( start , delete , insert)

const stringArray = ["item1" ,"item2" ,"item3"];
//                       0       1       2
//delete
console.log(stringArray);
const ans2= stringArray.splice(2,2);
console.log(ans2);
console.log(stringArray);


//insert 

stringArray.splice(1,0,"inserted item");
console.log(stringArray);


//insert and delete both together ;

//              0  1  2  3  4  5  6
const array2 = [38,7,12,32,88,37,2] ;
//                            .splice(start,delete,insert)
const deleted_items = array2.splice(1,2,69);
console.log(deleted_items);
console.log(array2);