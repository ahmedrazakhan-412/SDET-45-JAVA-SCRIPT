let arr = [1, 2 , 5, 4, 1, 4, 4];
		for (let i = 0; i < arr.length-1; i++) {
			for (let j = 0 ; j < arr.length-1; j++) {
				if(arr[j]> arr[j+1]) {
					let temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
        process.stdout.write("[ ");
		for (let i = 0; i < arr.length; i++) {
			process.stdout.write(arr[i]+" ");
		}
        console.log(" ]");