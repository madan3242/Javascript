class Employee{
    // name;
    // id;
    constructor(id, name){
        this.id = id;
        this.name = name;
        console.log("Constructor executed automatically");
    }
    getEmployeeDetails(){
        console.log("Employee Name : "+this.name);
        console.log("Employee ID : "+this.id);
    }
}

// console.log(new Employee());

let e1 = new Employee(101, "Hello");
console.log(e1);
e1.getEmployeeDetails();