// Print Odd and Even Numbers Of an Array

var arr = [10, 21, 42, 36, 55, 67, 73, 88, 99,54];
var arr1=arr;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    arr.push(arr.splice(i, 1)[0]);
    arr.length--;
    i--;
  }
}
console.log("Odd Numbers in an array are :  ",arr);
var arr1 = [10, 21, 42, 36, 55, 67, 73, 88, 99,54];
for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 != 0) {
    arr1.push(arr1.splice(i, 1)[0]);
    arr1.length--;
    i--;
  }
}
console.log("Even Numbers in an array are :  ",arr1);