let bellboy1 = {
    name : "Timmy",
    age : 19,
    hasWorkPermit : true,
    languages : ['French', 'English']
};

var housekeeper1 = {
    yearsOfExperience : 12,
    name : "Jane",
    cleaningReportoire : ['bathroom', 'lobby', 'bedroom']
}

function HouseKeeper(yearsOfExperience, name, cleaningReportoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningReportoire = cleaningReportoire;
}

var housekeeper1 = new HouseKeeper(9, 'Tom', ['lobby', 'bedroom']);

// class HouseKeeper{
//     constructor(yearsOfExperience, name, cleaningReportoire){
//         this.yearsOfExperience = yearsOfExperience;
//         this.name = name;
//         this.cleaningReportoire = cleaningReportoire;
//     }
// }

console.log(housekeeper1);


function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// class BellBoy {
//     constructor(name, age, hasWorkPermit, languages) {
//         this.name = name;
//         this.age = age;
//         this.hasWorkPermit = hasWorkPermit;
//         this.languages = languages;
//     }
// }

var bellboy2 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var bellboy3 = new BellBoy("Jimmy", 21, true, ["English", "Greman"]);
console.log(bellboy2);
console.log(bellboy3);