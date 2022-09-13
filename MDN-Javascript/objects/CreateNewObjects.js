// Using object initializers
const obj = {
    property1: value1,   // property name may be an identifier
    2: value2,   // or a number
    'property n': value3    // or a string
};

let x;
if(cond){
    x = {greeting : 'Hi there'};
}

const myHonda = {
    color :'red',
    wheels : 4,
    engine : {
        cylinder : 4,
        size : 2.2
    }
};

// Using a constructor function

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('Ford', 'Mustang', 1988);
const myCar2 = new Car('Eagle', 'Talon TSi', 1993);
const kenscar = new Car('Nissan', '300ZX', 1992);
const vpgscar = new Car('Mazda', 'Miata', 1990);

function Person (name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const rand = new Person('Rand McKinnon', 34, 'M');
const ken = new Person('Ken Jones', 36, 'M');

function Car(make, model, year, owner){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

const car1 = new Car('Eagle', 'Talon TSi', 1999, rand);
console.log(car1);
const car2 = new Car('Nissan', '300ZX', 1992, ken);
console.log(car2.owner.name);

car1.color = 'black';



//Using the Object.create method

// Animal properties and method encapsulation
const Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType() {  // Method which will display type of Animal
      console.log(this.type);
    }
  };
  
  // Create new animal type called animal1
  const animal1 = Object.create(Animal);
  animal1.displayType(); // Output: Invertebrates
  
  // Create new animal type called fish
  const fish = Object.create(Animal);
  fish.type = 'Fishes';
  fish.displayType(); // Output: Fishes
  
