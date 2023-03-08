/* 3) JavaScript to check if the number is palindrome or not.
-----------------------------------------------------------*/
function palindromeFun ( num )  { 
  
const string = String(num); 

const arrValue = string.split(''); 

const reveArrVal = arrValue.reverse();   

const revString = reveArrVal.join('');  
  
if (string == revString)  
{  
 console.log(string+' It is a Palindrome Number ');   
}  
else {  
 console.log(string+' It is not a Palindrome Number' );  
}  
}  
 
const num = 545;  
palindromeFun(num);  