/* Definition and Usage
The includes() method returns true if an array contains a specified value.

The includes() method returns false if the value is not found.

The includes() method is case sensitive.

Syntax
array.includes(element, start)*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits);
console.log("Result : "+fruits.includes("Mango"));
console.log("After : "+fruits);


//Start the search at position 3:

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits);
console.log("Result : "+fruits1.includes("Banana", 1));
console.log("After : "+fruits);
