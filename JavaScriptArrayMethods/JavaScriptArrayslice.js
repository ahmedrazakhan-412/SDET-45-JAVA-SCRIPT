/* JavaScript Array slice()
The slice() method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):

Example*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("Before : "+fruits);
console.log("Result : "+fruits.slice(1));
console.log("After : "+fruits);

/*
Note
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.

This example slices out a part of an array starting from array element 3 ("Apple"):

Example*/

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("Before : "+fruits1);
console.log("Result : "+fruits1.slice(3));
console.log("After : "+fruits1);



/*The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.

Example*/

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("Before : "+fruits2);
console.log("Result : "+fruits2.slice(1,3));
console.log("After : "+fruits2);


/*If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

Example*/

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("Before : "+fruits3);
console.log("Result : "+fruits3.slice(2));
console.log("After : "+fruits3);
