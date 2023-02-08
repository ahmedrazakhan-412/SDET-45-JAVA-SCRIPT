/* JavaScript Math.tan()

Definition and Usage
The Math.tan() method returns the tangent of a number.

The Math.tan() method expects the number in radians.

Based on sine and cosine:
Math.tan(x) = Math.sin(x) / Math.cos(x).

Syntax
Math.tan(x)

Return Value
Type	    Description
Number	    The tangent of the number.
            NaN if the number is empty or not numeric.

Examples */

console.log(Math.tan(1));
console.log(Math.tan(0));
console.log(Math.tan(Math.PI));

/*Math.tan(x) expect x in radians.

To use degrees, convert degrees to radians first.*/
let degrees = 60;
let radians = degrees * Math.PI/180;
console.log(Math.tan(radians));
