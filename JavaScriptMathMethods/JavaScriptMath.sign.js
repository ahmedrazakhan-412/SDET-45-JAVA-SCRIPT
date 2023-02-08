/* JavaScript Math.sign()

Definition and Usage
The Math.sign() method retuns whether a number is negative, positive or zero.

If the number is positive, this method returns 1.
If the number is negative, it returns -1.
If the number is zero, it returns 0.

Syntax
Math.sign(x)

Return Value
A Number, representing the sign of the specified number:
If the number is positive, it returns 1
If the number is negative, it returns -1
If the number is positive zero, it returns 0
If the number is negative zero, it returns -0
If the number is not a number, it returns NaN

Example 1 */
console.log(Math.sign(3));

//Example 2
console.log(Math.sign(-3));

//Example 3
console.log(Math.sign(0));