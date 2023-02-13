// Print Odd and Even Numbers Of an Array

var arr = [10, 21, 42, 36, 55, 67, 73, 88, 99,54];
var EvenNum=[]
var OddNum=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2 == 0){
      EvenNum.push(arr[i])
    }
    else{
      OddNum.push(arr[i])
    }
}
console.log("Odd Numbers in an array are :  ",OddNum);
console.log("Even Numbers in an array are :  ",EvenNum);
