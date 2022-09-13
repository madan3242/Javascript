// objectName.methodName = functionName;

const myObj = {
    myMethod : function(params){
        console.log(params);
    },
    myOtherMethod(params){
        console.log(params);
    }
};

myObj.myMethod(args);

function displayCar() {
    const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
    console.log(result);
}

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayCar = displayCar;
}

const vpgscar = new Car('Mazda', 'Miata', 1990);

vpgscar.displayCar();