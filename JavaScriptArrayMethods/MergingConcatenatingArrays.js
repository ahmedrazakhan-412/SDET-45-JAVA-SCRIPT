/* Merging (Concatenating) Arrays

The concat() method creates a new array by merging (concatenating) existing arrays:

Example (Merging Two Arrays)*/

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

/* The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can take any number of array arguments:*/

//Example (Merging Three Arrays)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1);

/* The concat() method can also take strings as arguments:

Example (Merging an Array with Values)*/

const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren2 = arr4.concat("Peter"); 
console.log(myChildren2);