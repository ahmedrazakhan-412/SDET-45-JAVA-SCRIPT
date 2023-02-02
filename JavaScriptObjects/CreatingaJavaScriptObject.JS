//Type 1 Creating a JavaScript Object

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    skillset : ["API","JavaScript","Selenium","Java"],
    fullName :	function() {return this.firstName + " " + this.lastName;},
    fullDetails :function() {return "firstName : "+this.firstName + " \nlastName : " + this.lastName+ " \nage : " + this.age+ " \neyeColor : " + this.eyeColor+ " \nskillset : " + this.skillset;},
    jobSummary : jobdetails = {
    companyname : "TestYantra"
  }
};
  //console.log(person.firstName);
  //console.log(person.skillset);
  //console.log(person.fullName());
  console.log(person.fullDetails());
  console.log("companyname : "+person.jobSummary.companyname);

