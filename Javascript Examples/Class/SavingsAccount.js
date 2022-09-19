class Savings{
    minBal = 500;
    openAccount(){
        console.log("Account Created Successfully");
    }
    deposit(){
        console.log("Money deposited");
    }
    withdraw(){
        console.log("Money withdraw");
    }
    getStatement(){
        console.log("Account Statement");
    }
    getBalance(){
        console.log("Account Balance");
    }
    closeAccount(){
        console.log("Account deleted");
    }
}
let c1 = new Savings();
let c2 = new Savings();
console.log(c1);
console.log(c2);
c1.openAccount();
c2.openAccount();

c2.minBal = 200;
console.log(c2);