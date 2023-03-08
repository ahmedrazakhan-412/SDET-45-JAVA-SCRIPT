/* Seperate all characters in string like UpperCase, LowerCase, Numbers, SpecailCharacters
Input - AxB5#*eZ5
Output -  10
*/
 
var str =  "AxB5#*eZ45jhjhh40gcg2000"; 
// var total=

console.log(str.replace(/[^0-9]/g,'*').split('*').filter((value)=>value!="").reduce((sum,value)=>Number(sum)+Number(value)));


// .split('*').filter((value)=>value!="").reduce((sum,value)=>Number(sum)+Number(value))
//    console.log(total);