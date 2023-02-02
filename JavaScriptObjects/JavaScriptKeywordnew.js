//Type 2 Using the JavaScript Keyword new

function studentInfo(name ,id, salary,skillset) {
  this.firstName=name
  this.id=id
  this.salary=salary
  this.skillset=skillset
  this.fullDetails = function () {
    return "firstName : "+this.firstName 
        + " \nid : " + this.id
        + " \nsalary : " +this.salary
        +"\nskillset : " +this.skillset;
  };
}
var std1 = new studentInfo("Khan", "TR204",45000,["API","JavaScript","Selenium","Java"]);
var std2 = new studentInfo("Ahmed", "TR354",25000);

console.log(std1.fullDetails());
//console.log(std1.skillset[2]);
//console.log(std2);