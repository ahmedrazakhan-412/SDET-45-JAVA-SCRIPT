// Event Loop in JavaScript

console.log("Start");

setTimeout(function() {console.log("In Progress");}, 2000);

setTimeout(function() {console.log("In Progress 1");}, 3000);

var myTimer  = setInterval(function() {console.log("Processing");}, 1000);

// clearInterval(myTimer,5000);


console.log("End");
