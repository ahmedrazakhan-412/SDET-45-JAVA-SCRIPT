/* Seperate all characters in string like UpperCase, LowerCase, Numbers, SpecailCharacters
Input - AxB5#*eZ5
Output -  10
*/
  function seperateAll(arr) {
  var Numbers = "";
		for (let index = 0; index < arr.length; index++) {
       if(arr[index]>=0 && arr[index]<=9) {
        Numbers = Numbers+arr[index]
      }
      else{
        Numbers = Numbers+"*";
      } 
    }
    var arrnum = Numbers.split("*");
    var num = 0;
    var total = 0;
    for (let index = 0; index < arrnum.length; index++) {
      if (arrnum[index]=="") {
      } 
      else{
      num = Number(arrnum[index]);
      total = total+num;
      }
    }
    console.log("The Addition of All Numbers are :"+total);
  }
  seperateAll("AxB5#*eZ45jhjhh40gcg2000"); 
    