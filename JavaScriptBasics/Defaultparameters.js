/* Default parameters
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

function fnName(param1 = defaultValue1, / … ,/ paramN = defaultValueN) {
    // …
  }  */


// function multiply(a, b = (Math.random()*10+1)) {
//     return a * b;
// }

// console.log(multiply(5, 2));  // Expected output: 10
// console.log(multiply(5));     // Expected output: with random k sath


function multiply(a, b = 8,c) {
     console.log(a+" "+b+" "+c);
  }
multiply(5,undefined,2);  // If you pass a param undefined, it will use the default value from the definition.