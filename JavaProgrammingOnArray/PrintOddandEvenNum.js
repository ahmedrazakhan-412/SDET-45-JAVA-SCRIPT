// Print Odd and Even Numbers Of an Array

var arr = [1, 2, 4, 3, 5, 6, 7, 8, 9];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    arr.push(arr.splice(i, 1)[0]);
    //console.log("result ", arr)
    arr.length--;
    i--;
  }
}
console.log("result ",arr)