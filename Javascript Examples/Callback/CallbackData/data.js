let employees = [
    {id : 101, name : "emp1" , sal : 34000},
    {id : 102, name : "emp2", sal : 45000}
];

let createEmployee = (emp, callback) => {
    setTimeout(() => {
        console.log("First");
        employees.push(emp)
        callback();
    }, 3000)
}

let getEmployee = () => {
    setTimeout(() => {
        let rows = "";
        console.log("Second");
        employees.forEach((emp) => {
            rows += `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.sal}</td>
            </tr>`
            document.getElementById('data').innerHTML = rows;
        })
    }, 1000)
}

createEmployee({id : 103, name : "emp3", sal : 65000}, getEmployee);
// getEmployee();

// console.log(employees);
