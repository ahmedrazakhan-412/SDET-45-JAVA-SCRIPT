/* "I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished*/

function sum(data1,data2) {
    let sum1 = data1+data2;
    console.log("the sum is "+sum1);
  }
  
  function diff(data1,data2) {
    let diff1 = data1-data2;
    console.log("the differance is "+diff1);
  }
  function mul(data1,data2) {
    let mul = data1*data2;
    console.log("the mul is "+mul);
  }
  function myCalculator(data1,data2,myCallback) {
    console.log("The Input's are : "+data1+" "+data2);
    myCallback(data1,data2);
    console.log("callback function pass");
}
    myCalculator(5, 5, sum);
    myCalculator(5, 5, mul);