/* "I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished*/

function shareStatus() {
console.log("Successfully shared status");
}
  
function addPhotos() {
console.log("Successfully added photos");
}

function commentMsg() {
console.log("Successfully commetted msg");
}

function updateProfile(name,email,username) {
console.log("The Input's are : "+name+" "+email+" "+username);
console.log("Successfully updated profile");
}

function BioBookSM(doOperation) {
doOperation("Khan","khan@412","khan412");
}

BioBookSM(addPhotos);
BioBookSM(updateProfile);
BioBookSM(shareStatus);