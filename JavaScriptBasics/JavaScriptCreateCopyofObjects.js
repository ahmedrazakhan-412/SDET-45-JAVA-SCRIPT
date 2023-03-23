/* JavaScript Objects are Mutable

Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

const x = person;  // Will not create a copy of person.
The object x is not a copy of person. It is person. Both x and person are the same object.

Any changes to x will also change person, because x and person are the same object.*/

//Example

var person = {
  firstName:"John",
  lastName:"Doe",
  age:50, 
  eyeColor:"blue"
}

// person.age = 10; // we changed the value of person.age   
// console.log(person.age); 
data = Object.create(person);
console.log(data.firstName="khan");
console.log(person.firstName); 

// var arr = [];
// console.log(typeof(arr));

// Object.freeze(person);
// person.firstName="khan";
// console.log(person.firstName);