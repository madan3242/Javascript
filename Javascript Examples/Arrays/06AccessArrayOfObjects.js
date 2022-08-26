const apps = [
    {"id": 1, "name": "Zaam-Dox", "company": "Dabfeed"}, 
    {"id": 2, "name": "Vagram", "company": "Youspan"}, 
    {"id": 3, "name": "Bitchip", "company": "Voonyx"}, 
    {"id": 4, "name": "Voltsillam", "company": "Pixope"}, 
    { "id": 5, "name": "Tresom", "company": "Bluejam" }
];

for(var key in apps){
    console.log(`${key} ${apps[key]}`);
    console.log(apps[key]);
}