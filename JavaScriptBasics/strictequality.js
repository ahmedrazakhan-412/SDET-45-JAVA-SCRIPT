/* Equality comparisons and sameness
JavaScript provides three different value-comparison operations:

=== — strict equality (triple equals)
== — loose equality (double equals)
Strict equality using ===
Strict equality compares two values for equality. 
Neither value is implicitly converted to some other value before being compared. 
If the values have different types, the values are considered unequal. 
If the values have the same type, are not numbers, and have the same value, they're considered equal. 
Finally, if both values are numbers, 
they're considered equal if they're both not NaN and are the same value, or if one is +0 and one is -0.*/

const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false