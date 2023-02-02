var arr="testyantra";
		for(var i=0;i<arr.length;i++){
			var count=0;
			for(var j=0;j<arr.length;j++){ 
				if(arr[i]==arr[j]){
					if(j<i){
						break;
					}
					count++;
				}
			}
			if(count>=1){
				if(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'){
					console.log(arr[i]+"--->"+count);
				}
			}
		}