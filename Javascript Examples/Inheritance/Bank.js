class Account{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    openAccount(){
        console.log("Account Opend Successfuly");
    }
}
class SavingsAccount extends Account{
    deposit(){
        console.log("Amount deposited");
        console.log(`Name: ${this.name} Id: ${this.id}`);
    }

}

// new SavingsAccount().openAccount();
// new SavingsAccount().deposit();
let s1 = new SavingsAccount(101, "Hello");
s1.openAccount();
s1.deposit();

class CreditCardAccount{}
 