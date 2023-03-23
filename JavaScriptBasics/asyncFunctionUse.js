/* In JavaScript, the "await" keyword is used to pause the execution of an asynchronous function 
until a promise is fulfilled or rejected. 
It is used in conjunction with the "async" keyword, which is used to define asynchronous functions.*/

// import fetch from 'node-fetch';

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
