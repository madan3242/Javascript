let bellboy1 = {
    name : "Timmy",
    age : 19,
    hasWorkPermit : true,
    languages : ['French', 'English'],
    moveSuitcase : function () {
        console.log("May i take your suitcase ?");
        pickUpSuitCase();
        this.moveSuitcase();
    }
};

bellboy1.moveSuitcase();


function HouseKeeper(yearsOfExperience, name, cleaningReportoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningReportoire = cleaningReportoire;
    this.clean = function () {
        console.log('cleaning in progress');
    }
}

var housekeeper1 = new HouseKeeper(9, 'Tom', ['lobby', 'bedroom']);