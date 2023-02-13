// JavaScript Promises

async function sync() {
console.log("Login to the Application");

var promise = new Promise(function(resolve, reject) {
    const x = "Data";
    const y = "Data"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
        
  await promise.
        then(function () {
            console.log('Success, Logged Application');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });
}

sync();