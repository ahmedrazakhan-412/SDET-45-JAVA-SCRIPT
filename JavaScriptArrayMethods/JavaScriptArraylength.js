/* JavaScript Array length
The length property provides an easy way to append a new element to an array:*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits);
fruits[fruits.length] = "Kiwi";
console.log("After : "+fruits);
console.log(fruits.length);
console.log(fruits.length = 2);