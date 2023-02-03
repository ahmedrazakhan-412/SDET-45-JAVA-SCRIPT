/* Definition and Usage
The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array

Syntax
array.every(function(currentValue, index, arr), thisValue)

Example 1
Check if all values in ages[] are over 18:*/

const ages = [32, 33, 26, 40];

console.log(ages.every(checkAge));

function checkAge(age) {
  return age > 18;
}

//Check if all answers are the same:

const survey = [
  { name: "Steve", answer: "Yes"},
  { name: "Jessica", answer: "Yes"},
  { name: "Peter", answer: "Yes"},
  { name: "Elaine", answer: "Yes"}
];

let result = survey.every(isSameAnswer);
console.log(result);

function isSameAnswer(el, index, arr) {
  if (index === 0) {
    return true;
  } else {
    return (el.answer === arr[index - 1].answer);
  }
}