/* Shifting Elements

Shifting is equivalent to popping, but working on the first element instead of the last.

JavaScript Array shift()

The shift() method removes the first array element and "shifts" all other elements to a lower index.*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits);
console.log("Result : "+fruits.shift());
console.log("After : "+fruits);

//The shift() method returns the value that was "shifted out":