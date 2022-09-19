class Customer{
    constructor() {
        console.log("Parent class constructor");
    }
    getAddress(){
        console.log("address Method");
    }
}

class SavingsAccount extends Customer{
    constructor(){
        super();
        console.log("Child class constructor");
    }
}

new SavingsAccount()