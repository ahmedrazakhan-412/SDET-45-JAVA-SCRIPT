/*JavaScript Array delete()
Warning !
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before : "+fruits);
console.log("Result : "+delete fruits[0]);
console.log("After : "+fruits);
