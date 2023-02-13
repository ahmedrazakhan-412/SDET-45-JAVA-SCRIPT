
//var std2 = new studentInfo("Khan", "TR204",45000,["API","JavaScript","Selenium","Java"]);


function studentInfo(name) {
    this.firstName=name
};


var std1 = new studentInfo("Khan");
console.log(std1.firstName);

function studentInfo(name,id) {
    this.firstName=name
    this.id=id
};