// Write the program to print the number if the number is a multiple of 5 & 10

function multipleOf(num) {
  
    if((num%5)==0 && (num%10)==0){
        return num+" This number is multiply by both 5 & 10";
    }
    else if((num%5)==0){
        return num+" This number is multiply only with 5";
    }
    else if((num%10)==0){
        return num+" This number is multiply only with 10";
    }
  else {
    return num+" This number is not multiply by both 5 & 10";
  }
}

console.log(multipleOf(30));
console.log(multipleOf(55));
console.log(multipleOf(10));
console.log(multipleOf(11));