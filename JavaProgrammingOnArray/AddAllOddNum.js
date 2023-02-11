// add all the odd numbers in an array

var totalOfAllOdd = 0;
   var a = [10, 21, 42, 36, 55, 67, 73, 88, 99,54];
   for(var i = 0; i<a.length;i++){
      if(a[i]%2 !== 0){
        totalOfAllOdd += a[i]
      }
   }
console.log(totalOfAllOdd);