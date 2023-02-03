/* Definition and Usage
The fill() method fills specified elements in an array with a value.

The fill() method overwrites the original array.

Start and end position can be specified. If not, all elements will be filled.

Syntax
array.fill(value, start, end)

Examples  
Fill all the elements with a value:        */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits);
console.log("Result : "+fruits.fill("Kiwi"));
console.log("After : "+fruits);


//Fill the last two elements:

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits1);
console.log("Result : "+fruits1.fill("Kiwi", 2, 4));
console.log("After : "+fruits1);