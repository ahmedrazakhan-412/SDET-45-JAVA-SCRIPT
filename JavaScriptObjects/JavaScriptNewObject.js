var person = new Object();
person.firstName="John";
person.lastName= "Doe";
person.age= 50;
person.eyeColor="blue";
person.skillset = ["API","JavaScript","Selenium","Java"];
person.fullName =function() {return this.firstName + " " + this.lastName;};
person.fullDetails = function() {return "firstName : "+this.firstName + " \nlastName : " + this.lastName+ " \nage : " + this.age+ " \neyeColor : " + this.eyeColor+ " \nskillset : " + this.skillset;},
person.jobSummary = jobdetails = {
    companyname : "TestYantra"
  }
//console.log(person.firstName);
//console.log(person.fullName());.
// console.log(person.fullDetails());
// console.log("companyname : "+person.jobSummary.companyname);

for (const key in person) {
 //  console.log(key +" --- "+person[key]);
}

// add in object

person.firstName="John";

