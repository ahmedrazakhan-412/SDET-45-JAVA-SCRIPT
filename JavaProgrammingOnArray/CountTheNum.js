// let arr = [0, 1 , 0, 0, 1, 1, 1];
// 		for (let i = 0; i < arr.length; i++) {
// 			let count =0;
// 			for (let j = 0; j < arr.length; j++) {
// 				if(arr[i]==arr[j]) {
// 					if(j<i) {
// 						break;
// 					}
// 					count++;
// 				}
// 			}
// 			if(count>=1) {
//                 console.log(arr[i]+"---> "+count);
//             }
//         }	


let arr = [ {fname:"abc" , address:"India"},
			{fname:"def" , address:"Europe"},
			{fname:"rst" , address:"India"},
			{fname:"xyz" , address:"Europe"},
			{fname:"mno" , address:"Russia"}];
		for (let i = 0; i < arr.length; i++) {
			let count =0;
			for (let j = 0; j < arr.length; j++) {
				if(arr[i].address==arr[j].address) {
					if(j<i) {
						break;
					}
					count++;
				}
			}
			if(count>=1) {
                console.log(arr[i].address+"---> "+count);
            }
        }	

// let arr = [ {fname:"abc" , address:"India"},
// 			{fname:"def" , address:"Europe"},
// 			{fname:"rst" , address:"India"},
// 			{fname:"xyz" , address:"Europe"},
// 			{fname:"mno" , address:"Russia"}];
// 		for (let i = 0; i < arr.length; i++) {
// 			let count =0;
// 			for (let j = 0; j < arr.length; j++) {
// 				if(arr[i].address==arr[j].address) {
// 					if(j<i) {
// 						break;
// 					}
// 					count++;
// 				}
// 			}
// 			if(count>=1) {
// 				if (arr[i].address=="India") {
// 					console.log("The people living in "+arr[i].address+"---> "+count);
// 				}
//             }
//         }	


