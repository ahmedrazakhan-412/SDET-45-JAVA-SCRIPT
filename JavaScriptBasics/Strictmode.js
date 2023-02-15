/* Strict mode for scripts
To invoke strict mode for an entire script, put the exact statement "use strict"; (or 'use strict';) before any other statements.

Whole-script strict mode syntax*/
"use strict";
//v = "Hi! I'm a strict mode script!";
//console.log(v);

/*Strict mode for functions
Likewise, to invoke strict mode for a function, 
put the exact statement "use strict"; (or 'use strict';) in the function's body before any other statements.*/

function myStrictFunction() {
    "use strict";
    a= 50;
  // Function-level strict mode syntax
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}

function myNotStrictFunction() {
  return "I'm not strict.";
}

/*The "use strict" directive can only be applied to the body of functions with simple parameters. 
Using "use strict" in functions with rest, default, or destructured parameters is a syntax error.*/

function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  return a + b;
}