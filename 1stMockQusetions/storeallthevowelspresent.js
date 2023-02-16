/* Take a word as a string and store all the vowels present in the string in an array 
( Return type of the o/p should be an array) */

var arr="testyantra";
var arr2=[];
        console.log("The Given String '"+arr+"' ");  
        process.stdout.write("Only Vowels are : ");
		for(var i=0;i<arr.length;i++){
			if(arr[i]=='a' || arr[i]=='e' || arr[i]=='i' || arr[i]=='o' || arr[i]=='u'){
				arr2.push(arr[i]);
			}
		}

        console.log(arr2);