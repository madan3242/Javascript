class Account{
    constructor(id, name){
        console.log("Parent class - Account class");
        this.id = id;
        this.name = name;
    }
}
class SavingsAccount extends Account{
    minBal = 500;
    constructor(id, name, amount){
        super(id, name);
        console.log("Child class - Savings class");
        this.amount = amount;
    }
    getBal(){
        return this.amount - this.minBal;
    }
}

let c1 = new SavingsAccount(2056, "Customer01", 50000);
console.log(c1);
console.log(c1.getBal());

class CurrentAccount extends Account{ 
    minBal = 10000;
    constructor(id, name, amount){
        super(id, name);
        this.amount = amount;
    }
    getBal(){
        return this.amount - this.minBal;
    }
}
let c2 = new CurrentAccount(2057, "Customer02", 60000);
console.log(c2);
console.log(c2.getBal());