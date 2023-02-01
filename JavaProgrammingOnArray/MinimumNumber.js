let arr = [1, 2 , 5, 4, 1, 4, 4];
		let min = arr[0];
		for (let i = 0; i < arr.length; i++) {
			if(arr[i]<min) {
				min=arr[i];
			}
		}	
		console.log("Minimum --->  "+min);