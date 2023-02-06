/* We have seen that function Overloading is not supported in JavaScript, but we can implement the function Overloading on our own, which is pretty much complex when it comes to more numbers and more types of arguments. 

Example: The following code will help you to understand how to implement the function Overloading in JavaScript. */

// Creating a class  "foo"
class foo {
  
    // Creating an overloadable method/function.
    overloadableFunction() {
  
        // Define three overloaded functions
        var function1 = function (arg1) {
            console.log("Function1 called with arguments : " + arg1);
            return arg1;
        };
  
        var function2 = function (arg1, arg2) {
            console.log("Function2 called with arguments : " + arg1 + " and " + arg2);
            return arg1 + arg2;
        };
  
        var function3 = function (arg1) {
        var concatenated__arguments = " ", 
            temp = " "
  
            // Concatenating all the arguments 
            // and storing them into a string
            for (var i = 0; i < arg1.length; i++) {
                concatenated__arguments = concatenated__arguments + arg1[i]
            }
  
            /* Just ignore this loop and temp variable, 
               we are using this loop to concatenate 
               arguments with a space between them */
            for (var i = 0; i < arg1.length; i++) {
                temp = temp + " " + arg1[i]
            }
  
            console.log("Function3 called with this array as an argument : [" + temp + "]");
            console.log("Output of log is : ")
  
            // Returns concatenated argument string
            return concatenated__arguments; 
        };
  
        /* Here with the help of the length of the
           arguments and the type of the argument 
           passed ( in this case an Array ) we 
           determine which function to be executed */
        if (arguments.length === 1 
                && Array.isArray(arguments[0])) {
            return function3(arguments[0]);
        } else if (arguments.length === 2) {
            return function2(arguments[0], arguments[1]);
        } else if (arguments.length === 1 
                && !Array.isArray(arguments[0])) {
            return function1(arguments[0]);
        }
    }
}
  
// Driver Code
  
// Instantiate an object of the "foo" class
var object = new foo();
  
// Call the overloaded functions using the
// function overloadableFunction(...)
// We are passing 1 argument so executes function1
console.log(object.overloadableFunction("Geeks"));
  
// We are passing two arguments so executes function2
console.log(object.overloadableFunction("Geeks", "for"));
  
// We are passing an array so executes function3
console.log(object.overloadableFunction(["Geeks", "for", "Geeks"]));  


/* Explanation: In the above program, when a different number of arguments are passed to the same function, then based on the number and type of arguments, the arguments will be passed to the respective function. 

In this case, we have used three different functions (function1, function2, function3) for function Overloading. */