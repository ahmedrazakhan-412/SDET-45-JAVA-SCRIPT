// sum the digits of the current sum until it becomes a single digit


function addLastDigit(numbers) {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0); 
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0); 
    }
    return sum;
  }
  
  console.log(addLastDigit([6,4,9])); 


  