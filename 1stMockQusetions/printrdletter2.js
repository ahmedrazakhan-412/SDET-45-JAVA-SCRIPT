var str = "good morning"
console.log(str.split('o')); // [ 'g', '', 'd m', 'rning' ]

var arr="testyantra";
console.log("The Given String '"+arr+"' ");  
process.stdout.write("Only Vowels are in UpeerCase: ");
for(var i=0;i<arr.length;i++){
if(arr[i]=='a' || arr[i]=='e' || arr[i]=='i' || arr[i]=='o' || arr[i]=='u'){
    process.stdout.write(arr[i].toUpperCase());
	}
 else{
    process.stdout.write(arr[i]);
 }
}