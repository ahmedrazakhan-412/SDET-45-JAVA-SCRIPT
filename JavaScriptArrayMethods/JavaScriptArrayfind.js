/* JavaScript Array find()

Definition and Usage
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.

Syntax
array.find(function(currentValue, index, arr),thisValue) */

const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 10;
}

 console.log(ages.find(checkAge));
