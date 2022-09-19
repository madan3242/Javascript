class Employee{
    constructor(empId, empName, empEmail){
        this.empId = empId;
        this.empName = empName;
        this.empEmail = empEmail;

        this.getDetails();
        // console.log(`Employee ID : ${this.empId}
        // Employee Name : ${this.empName}
        // Email : ${this.empEmail}`);
    }
    getDetails(){
        console.log(`Employee ID : ${this.empId}
        Employee Name : ${this.empName}
        Email : ${this.empEmail}`);
    }
}

let e1 = new Employee("2055EX101", "Employee 1", "emp1@gmail.com");