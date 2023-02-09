/* JavaScript Template Literals

Synonyms:
Template Literals
Template Strings
String Templates
Back-Tics Syntax

Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.
The method is called string interpolation.
The syntax is:
${...}

Variable Substitutions
Template literals allow variables in strings:
Example */

let firstName = "John";
let lastName = "Doe";
let text2 = `My Firstname ${firstName}`;
let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);
console.log(text2);

/* Automatic replacing of variables with real values is called string interpolation.
Expression Substitution
Template literals allow expressions in strings:

Example */
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// Automatic replacing of expressions with real values is called string interpolation.