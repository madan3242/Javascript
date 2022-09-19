class Bank{
    min_Bal = 600;
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    open_Account(){
        console.log("Account Opened Succesfully");
        console.log("Account balance :"+ this.min_Bal);
        console.log(this.name);
        console.log(this.id);
    }
}
new Bank();

let c1 = new Bank(101, "Hello");

c1.open_Account();
