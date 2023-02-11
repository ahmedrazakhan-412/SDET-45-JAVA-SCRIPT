// let arr = [1,2,5,4,1,4,4];
// 		for (let i = 0; i < arr.length; i++) {
// 			for (let j = i+1; j < arr.length; j++) {
// 				if (arr[i]==arr[j]) {
// 					arr[j]=0;
// 				}
// 			}
// 		}
// 		process.stdout.write("[ ");
// 		for (let k = 0; k < arr.length; k++) {
// 			if (arr[k]!=0) {
// 				process.stdout.write(arr[k]+" ");
// 			}
// 		}
// 		console.log(" ]");

		let a = ["1", "1", "2", "3", "3", "1"];
		let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
		console.log(unique);