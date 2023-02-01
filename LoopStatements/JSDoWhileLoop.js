var arr = [1,5.2,'A',"JS"]
console.log(arr);
console.log("The length of an array is : "+arr.length);
let i=0;
do {
  console.log(i + " -- "+arr[i]);
  i++;
}
while (i < arr.length);