/* Function Borrowing

With the bind() method, an object can borrow a method from another object.

This example creates 2 objects (person and member).

The member object borrows the fullname method from the person object:

Example */

var person = {
  firstName1:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName1 + " " + this.lastName+ " " + this.email;
  }
}

var khan = {
  firstName:"Hege",
  lastName: "Nilsen",
}

function greeting(fullName, lastName) {
  return "Mera "+fullName+" Apka "+person.fullName()+" "+lastName;
}

// Call
console.log(greeting.call(person,"shashi","Khan"));

// Apply
var arr = [];
console.log(greeting.apply(person,[arr.push(person.email="khan@412"),"shashi", "Khan"]));

// Bind
// var bindData = greeting.bind(person,"shashi", "Khan");
// console.log(bindData());