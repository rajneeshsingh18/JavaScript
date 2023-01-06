//filter methods on array--> .filter()


const numbers = [3,12,6,23,16,15];

const isOdd = function(num){
    return num%2!==0;
}

const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

const evenNumbers = numbers.filter((num)=>{
    return num%2===0;
})

console.log(evenNumbers);


//reduce method in array--> .reduce()

const num = [1,2,3,4,5];

//--> Aim : sum of natural numbers using reduce method in an arary

const sum = num.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue;
} , 100); //-->intial value added in 55 +100 = 155 [ans]


// Accumulator   , CurrentValue ,    Return
//   1                   2           3
//   3                   3           6
//   6                   4           10
//   10                  5           15
//   15                  100          115 [ans]

console.log(sum);


const userCart = [
    {productId : 1 , productName : "Mobile" , price : 12000},
    {productId : 2 , productName : "Tv" , price : 22000},
    {productId : 3 , productName : "Laptop" , price : 42000},  
]

const totalAmount = userCart.reduce((accumulator , currentProcuct)=>{
    return accumulator + currentProcuct.price;
} , 0)


// Accumulator   , CurrentValue ,    Return
//   12000              22000          34000
//   34000              42000          76000
//  76000                0             76000 [ans.]

console.log("Final bill Amount : " ,totalAmount)

