/* JavaScript break and continue
The break statement "jumps out" of a loop.
The continue statement "jumps over" one iteration in the loop.

Break statement: The break statement is used to jump out of a loop. 
It can be used to “jump out” of a switch() statement. 
It breaks the loop and continues executing the code after the loop.*/

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log("The number is " + i );
}

/*Continue statement: The continue statement “jumps over” one iteration in the loop. 
It breaks iteration in the loop and continues executing the next iteration in the loop.

The continue statement breaks one iteration (in the loop), 
if a specified condition occurs, and continues with the next iteration in the loop.

This example skips the value of 3: */

for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  console.log("The number is " + i );
}