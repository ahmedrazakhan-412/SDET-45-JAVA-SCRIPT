/* Function Borrowing

With the bind() method, an object can borrow a method from another object.

This example creates 2 objects (person and member).

The member object borrows the fullname method from the person object:

Example */

var person = {
  firstName1:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName1 + " " + this.lastName;
  }
}

var khan = {
  firstName:"Hege",
  lastName: "Nilsen",
}

//let f = person.fullName.call(khan);
let f = person.fullName.call(khan);
console.log(`fullName : ${f}`);
