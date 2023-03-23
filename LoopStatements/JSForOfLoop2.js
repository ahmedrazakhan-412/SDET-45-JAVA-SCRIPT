/* the for...of loop is a control structure in JavaScript that is used to iterate over iterable objects, 
such as arrays, strings, and maps. 
It allows you to loop through each element in the iterable object 
without having to deal with the index or the length of the object.*/


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    hobbies: ['reading', 'painting', 'gardening']
  };
  
  for (const [key, value] of Object.entries(person)) {
    if (key == "address") {
        console.log("address : ");
    for (const [key, value] of Object.entries(person.address)) {
        console.log(`${key}: ${value}`);
    }
}
else {
    console.log(`${key}: ${value}`);
}
    
  }
  