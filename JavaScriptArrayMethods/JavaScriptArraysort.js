/* JavaScript Array sort()

Definition and Usage
The sort() sorts the elements of an array.

The sort() overwrites the original array.

The sort() sorts the elements as strings in alphabetical and ascending order.

Sort numbers in ascending order:*/

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort((a, b)=>{a-b}));

//Sort numbers in descending order:

const points1 = [40, 100, 1, 5, 25, 10];
console.log(points1.sort((a, b)=>b-a));