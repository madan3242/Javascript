class Address{
    constructor(hno, area, city, state){
        console.log("Addres class constructor");
        this.hno = hno;
        this.area = area;
        this.city = city;
        this.state = state;
    }
    updateAddress(){
        
    }
}

class SvaingsAccount{
    constructor(accNo, accName, amount, Address){
        console.log("Savings class constructor");
        this.accNo = accNo;
        this.accName = accName;
        this.amount = amount;
        this.address = Address;
    }
}

let c1 = new SvaingsAccount(1021, "Account 1", 10000, new Address("123", "Marathalli", "Banglore", "Karnataka"));

console.log(c1);

export default Address