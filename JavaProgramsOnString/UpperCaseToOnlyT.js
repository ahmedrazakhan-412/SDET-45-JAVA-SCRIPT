var arr = "tEstyantra";
console.log("The Given String '"+arr+"' ");  
process.stdout.write("t Has been converted into UpperCase : ");
for(var i=0;i<arr.length;i++){
    if(arr[i]=='t') {
      var  s='T';
     process.stdout.write(s);
    }
    else{
        process.stdout.write(arr[i].toLowerCase()); 
    }
}