let employees = [{"id":1,"name":"Scarlet","salary":"$914.18"},
                {"id":2,"name":"Evvie","salary":"$921.57"},
                {"id":3,"name":"Lu","salary":"$974.63"},
                {"id":4,"name":"Izak","salary":"$981.77"},
                {"id":5,"name":"Cristen","salary":"$978.13"},
                {"id":6,"name":"Starlene","salary":"$920.17"},
                {"id":7,"name":"Nikoletta","salary":"$910.04"},
                {"id":8,"name":"Ephrayim","salary":"$995.95"}];

let createEmployee = (emp) => {
    return new Promise((resolve, reject) =>{
        let flag = true;
        setTimeout(() => {
            employees.unshift(emp);
            flag ? resolve("Successfully inserted") : reject("Not inserted")
        }, 3000);
    });
}

let getEmployee = () => {
    setTimeout(() => {
        let rows = "";
        employees.forEach((emp) => {
            rows += `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.salary}</td>
            </tr>`
        })
        document.getElementById('data').innerHTML = rows;
    })
}

createEmployee( {id : 9, name : "Maisie", salary :"$944.93"})
    .then((msg) => {
        console.log(msg);
        getEmployee();
    })
    .catch((err) => {
        console.log(err);
    })