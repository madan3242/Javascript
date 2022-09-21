// import Address from "./Bank";
const Address = require('./Bank');

// const {Address, SavingsAccount} = require('./Bank');

class CreditCard{
    constructor(ccNo, accName, address){
        this.ccNo = ccNo;
        this.accName = accName;
        this.address = address;
    }
}

let cc1 = new CreditCard("c1001", "Account 2", new Address("1022", "Marathalli", "Banglore", "Karnataka"));

console.log(cc1);