
/*  When a function name is overloaded with different jobs it is called Function Overloading. In Function Overloading “Function” name should be the same and the arguments should be different.

Unlike other programming languages, JavaScript Does not support Function Overloading.

Example: Here is a small code that shows that JavaScript does not support Function Overloading. */

function studentInfo(name,id) {
    this.firstName=name
    this.id=id
};

/* The above function will be
   overwritten by the function 
   below, and the below function 
   will be executed for any number
   and any type of arguments */

function studentInfo(name) {
    this.firstName=name
};

// Calling code
var std1 = new studentInfo("Khan",25);
console.log(std1);
