/*Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.

JavaScript Array splice()
The splice() method can be used to add new items to an array:

Example*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits);
console.log("Result : "+fruits.splice(2, 0, "Lemon", "Kiwi"));
console.log("After : "+fruits);

/* The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:*/

//Example

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits1);
console.log("Result : "+fruits1.splice(2, 2, "Lemon", "Kiwi"));
console.log("After : "+fruits1);