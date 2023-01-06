//2015 / ES6 --> Introduced class keyword

class Animal{

    constructor(name , age){
        this.name = name;
        this.age = age ;
    }

    static hello(){
        console.log("Static method can be called from className ")
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

    constructor(name , age ,hobby){
        super(name , age);
        this.hobby= hobby;
    }
    static desc = " Hi static property";

    feature(){
        return `${this.hobby} permanent`;
    }
    bark(){
        console.log("dog is barking");
    }

    eat(){
        return `${this.name} is eating in Dog class :) `;
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

const lara = new Dog("lara" , 3 ,"sleeping");
const hi = lara.feature();
console.log(hi);
console.log(lara);

console.log(lara.eat());

//static method
Animal.hello();