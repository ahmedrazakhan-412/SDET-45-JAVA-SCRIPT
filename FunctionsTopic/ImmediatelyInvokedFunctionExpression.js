//Immediately Invoked Function Expression

// Declaring the parameter required.

(function(dt,name ,rank) {
    console.log("Immediately Invoked Function Expression");
    console.log(dt.toLocaleTimeString());
    console.log(name  + " Has Scored -- "+ rank+" rank");
    // Passing the Parameter.
})(new Date(),"Raza", 1);

// without Passing the Parameter.

(function() {
    console.log("Immediately Invoked Function without Passing the Parameter");
})();

