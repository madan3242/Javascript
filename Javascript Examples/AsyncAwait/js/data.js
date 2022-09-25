// const employees = require('./emp');

// console.log(employees);
let employees = [{
    "id": 1,
    "name": "Mace",
    "email": "mtorrance0@forbes.com"
  }, {
    "id": 2,
    "name": "Loretta",
    "email": "ljiran1@purevolume.com"
  }, {
    "id": 3,
    "name": "Olag",
    "email": "odundendale2@sbwire.com"
  }, {
    "id": 4,
    "name": "Ted",
    "email": "terni3@huffingtonpost.com"
  }, {
    "id": 5,
    "name": "Franny",
    "email": "fjimson4@oracle.com"
  }, {
    "id": 6,
    "name": "Adolf",
    "email": "aescot5@eventbrite.com"
  }, {
    "id": 7,
    "name": "Alick",
    "email": "astreater6@wordpress.com"
  }, {
    "id": 8,
    "name": "Melessa",
    "email": "mmullis7@reference.com"
  }, {
    "id": 9,
    "name": "Lorianne",
    "email": "lkubalek8@weebly.com"
  }];

let createEmployee = (emp) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            employees.unshift(emp);

            let flag = true;
            flag ? resolve("Success") : reject("Failure");

        }, 3000);
    })
}

let getEmployee = () => {
    setTimeout(() => {
        let rows = "";
        employees.forEach((emp) => {
            rows += `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.email}</td>
            </tr>`
        })
        document.getElementById('data').innerHTML = rows;
    }, 1000)
}

let run =  async () => {
    await createEmployee({ id : 10, name : "Zerk", email : "zstrowlger9@ucoz.ru"}).then((msg) => {
        console.log(msg);
    }).catch((err) => {
        console.log(err);
    });
    getEmployee()
}

run();