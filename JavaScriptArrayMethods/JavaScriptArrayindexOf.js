/* JavaScript Array indexOf()

Definition and Usage
The indexOf() method returns the first index (position) of a specified value.

The indexOf() method returns -1 if the value is not found.

The indexOf() method starts at a specified index and searches from left to right.

By default the search starts at the first element and ends at the last.

Negative start values counts from the last element (but still searches from left to right).

Syntax
array.indexOf(item, start)

Find the first index of "Apple":*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple"));

//Start at index 3:

const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log(fruits1.indexOf("Apple", 3));