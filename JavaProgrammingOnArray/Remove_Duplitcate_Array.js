let arr = [1,2,5,4,1,4,4];
		for (let i = 0; i < arr.length; i++) {
			for (let j = i+1; j < arr.length; j++) {
				if (arr[i]==arr[j]) {
					arr[j]=0;
				}
			}
		}
		process.stdout.write("[ ");
		for (let k = 0; k < arr.length; k++) {
			if (arr[k]!=0) {
				process.stdout.write(arr[k]+" ");
			}
		}
		console.log(" ]");