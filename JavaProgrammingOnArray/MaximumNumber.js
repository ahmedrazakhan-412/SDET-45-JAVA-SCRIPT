let arr = [1, 2 , 5, 4, 1, 4, 4];
		let max = arr[0];
		for (let i = 0; i < arr.length; i++) {

			if(arr[i]>max) {
				max=arr[i];
			}
		}	
		console.log("Maximum  --->  "+max);