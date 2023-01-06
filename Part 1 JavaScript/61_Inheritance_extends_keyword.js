//2015 / ES6 --> Introduced class keyword

class Animal{

    constructor(name , age){
        this.name = name;
        this.age = age ;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}


//inheritnce --> extends keyword

class Dog extends Animal{
    static desc = " Hi static property";

    bark(){
        console.log("dog is barking");
    }
}


const animal_1 = new Animal("Mauu" , 2);
console.log(animal_1);
console.log(animal_1.eat());
console.log("Supercute : " ,animal_1.isSuperCute());
console.log("Cute : "  ,animal_1.isCute());

const tommy = new Dog("tommy" , 3);
console.log(tommy.eat());
console.log(tommy.bark());
console.log(tommy.desc); // undeinded

console.log(Dog.desc); // because of static keyword


