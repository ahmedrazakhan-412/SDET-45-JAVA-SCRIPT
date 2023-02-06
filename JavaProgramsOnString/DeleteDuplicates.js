
function deleteDuplicates(ch) {
	console.log("The Given String '"+ch+"' ");  
	process.stdout.write("After Deleting Duplicates : ");
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
					process.stdout.write(ch[i]);
				}
			}
}

deleteDuplicates("Testyantra");
