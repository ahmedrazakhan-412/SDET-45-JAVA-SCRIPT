/*Write the program to get the 3rd letter from each word 
Input: [javascript, selenium, api, cypress]
Output: v, l, i, p */

// function gettheletter(str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i].slice(2,3)+" ");  
//   }
// } 
// gettheletter(["javascript","selenium", "api", "cypress"]); 

var arr = ["javascript","selenium", "api", "cypress"];
console.log(arr.map((word) => word.charAt(2).toString()));