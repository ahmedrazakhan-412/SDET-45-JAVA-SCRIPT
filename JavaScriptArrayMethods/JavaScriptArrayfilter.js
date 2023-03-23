/* JavaScript Array filter()

Definition and Usage
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.

Syntax
array.filter(function(currentValue, index, arr), thisValue) */

const ages = [32, 14, 33, 16, 40,12];
console.log(ages.filter(checkAdult));

function checkAdult(age) {
  return age >= 18;
}