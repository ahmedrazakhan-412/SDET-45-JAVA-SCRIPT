// Error's In JavaScript

// var a;
// console.log(a); // undefined

// let b;
// console.log(b); // undefined

// const c;
// console.log(c); // SyntaxError: Missing initializer in const declaration

//console.log(d); // ReferenceError: d is not defined

// var a=10;
// console.log(a); // 10 we can do redeclaration and reassign of var variable 

// b=20;
// console.log(b); // 20 we cannot do redeclaration but reassign of let variable

//let b=20; // SyntaxError: Identifier 'b' has already been declared

// const c=0;
// console.log(c);
// c=10; // TypeError: Assignment to constant variable.
// console.log(c);

// console.log(b); // ReferenceError: Cannot access 'b' before initialization only for let
// let b=20;

// var inh = new inherit();  // ReferenceError: Cannot access 'inherit' before initialization
// class inherit {
//     b = 50;
//    }

// var  // SyntaxError: Unexpected end of input

// let arr=[20];
// arr.length=2**50; // RangeError: Invalid array length

function loop(x) {
    if (x >= 1000000000000) return; 
    loop(x+1) 
}
loop(0)