/* JavaScript String ReplaceAll()
In 2021, JavaScript introduced the string method replaceAll():

Example */
let text = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(text.replaceAll("Cats","Dogs"));
console.log(text.replaceAll("cats","dogs"));

/*The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

Example */

console.log(text.replaceAll(/Cats/g,"Dogs"));
console.log(text.replaceAll(/cats/g,"dogs"));

/* Note
replaceAll() is an ES2021 feature.

replaceAll() does not work in Internet Explorer.*/