// JavaScript Promises

async function sync() {
    
console.log("Login to the Application");

var p = new Promise(function(resolve, reject) {
    const x = 0;
    const y = "0"
    if(x === y) {
        resolve("In Progress");
        reject("Rejected");
    }
    });
        
  await p.
        then(function () {
            console.log('Success, Logged Application');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });
}

sync();