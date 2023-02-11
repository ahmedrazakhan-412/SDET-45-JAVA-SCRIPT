// var a = 10;
// var b = 20;
// var c = 30;
// console.log(a+b+c) // 60

// var d = 53;
// var e = 10;
// var x = "3";
// console.log(d+e+x) // 633

// for (let index = 0; index < 2; index++) {
//     console.log(index);   // 0 1
// }
// console.log(index); // index is not defined

// const a = 10;{
// const a = 20;
// console.log(a) // 20
// }
// console.log(a); // 10
// const fruits = ["Mango","Apple"];
// console.log(fruits.length); // 2
// console.log(fruits[0]); // Mango

// var ran = Math.floor(Math.random()*(30-20+1) + 10);
// console.log(ran);

//  you can simply call it like this to empty any array in your javascript application:

// var arr=[1,2,3];
// arr.length = 0;
// console.log(arr)

// var arr1=[1,2,3];
// while(arr1.length > 0) {
//     arr1.pop();
// }
// console.log(arr1)


// (function () {a=b=c=5 })
// console.log(b); // b is not defined

// var str = 'I am an employee ';
// var removedSpace = str.replaceAll(' ','');
// console.log(removedSpace);

// function reverseWords(str) {
//     let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//     return reverseWordArr.join(" ");
//   }

//   console.log(reverseWords('I am an employee '));


// Print UpperCase from statement
// var arr = "I am an employee of TestYantra";
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]>="A" && arr[index]<="Z") {
//         console.log(arr[index]);
//     }
// }

// const person = {
//     name: "Raza"
// };
// // re-initialize its value
// person.name = "Khan";
// console.log(person.name) // Khan 

// program to generate fibonacci series up to n terms
// take input from the user

// var number = 15;
// var n1 = 0, n2 = 1, nextTerm;
// process.stdout.write('Fibonacci Series : ');
// for (let i = 1; i <= number; i++) {
//     process.stdout.write(n1+" ");
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// remove white empty spaces from Strings in JavaScript
function trimLeftSpace(str) {
    var result = "";
    for(var i = 0; i < str.length; i++) {
      if(str[i] == " ") {
        continue;
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  console.log(trimLeftSpace('I am an employee '));