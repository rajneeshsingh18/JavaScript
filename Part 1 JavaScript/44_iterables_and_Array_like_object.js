//iterables

//--> jispe hum for of loop laga sakein
//string , array are iterable

const firstName = "Rajneesh";
for(let char of firstName){
    console.log(char)
}

const items= ["item1" , "item2" , "items3"];
for(let item of items){
    console.log(item);
}

//array like object

//-->jinke paas length property hoti hai
//-->aur jisko hum index se access kar sakte hai
//string

const lastName = 'Singh';
console.log(lastName.length);
console.log(lastName[lastName.length -1]);