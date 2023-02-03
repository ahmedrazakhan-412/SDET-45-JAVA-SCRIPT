/* JavaScript Array unshift()

The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits);
console.log("Result : "+fruits.unshift("Lemon"));
console.log("After : "+fruits);

//The unshift() method returns the new array length: