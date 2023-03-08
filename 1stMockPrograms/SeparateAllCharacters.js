/* Seperate all characters in string like UpperCase, LowerCase, Numbers, SpecailCharacters
Input - AxB1#*eZ8
Output -  UpperCase : ABZ
          LowerCase : xe
          Numbers : 18
          SpecailCharacters : #*
*/

  function seperateAll(arr) {
    
    var UpperCase ="";
    var LowerCase ="";
    var Numbers ="";
    var SpecailCharacters ="";

		for (let index = 0; index < arr.length; index++) {
      if(arr[index]>="A" && arr[index]<="Z") {
        UpperCase = UpperCase+arr[index];
      }
      else if(arr[index]>="a" && arr[index]<="z") {
        LowerCase = LowerCase+arr[index];
      }
      else if(arr[index]>=0 && arr[index]<=9) {
        Numbers = Numbers+arr[index];
      }
      else{
        SpecailCharacters = SpecailCharacters+arr[index];
      }
    }
    console.log("The UpperCase are : "+UpperCase);
    console.log("The LowerCase are : "+LowerCase);
    console.log("The Numbers are : "+Numbers);
    console.log("The SpecailCharacters are : "+SpecailCharacters);
  }
    seperateAll("AxB1#*eZ8"); 
