// Print the Vowels present in the string and the respective occurrence
function occuranceOfVowels(ch) {
	console.log("The Given String '"+ch+"' ");  
    console.log("With occurance Of Vowels : ");
	for (var i = 0; i < ch.length; i++) {
		var count =0;
		for (var j = 0; j < ch.length; j++) {
			if(ch[i]==ch[j]) {
				if(j<i) {
					break;
				}
				count++;
			}
		}
		if(count>=1) {
            if(ch[i]=='a'|| ch[i]=='e'|| ch[i]=='i' || ch[i]=='o' || ch[i]=='u'){
			console.log(ch[i]+"---> "+count);
            }
		}
	}
}
occuranceOfVowels("testyantra");