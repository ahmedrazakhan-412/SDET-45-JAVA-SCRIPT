
/* getter
The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.*/

const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      return this.log[this.log.length - 1];
    }
  };
  
  console.log(obj.latest); // Expected output: c

  /* setter
The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.*/

const language = {
  log: [],
  set current(name) {
   for (let index = 0; index < name.length; index++) {
    var element = name[index];
    this.log.push(element);
    }
   }
};

language.current = 'ENFA';
console.log(language.log);  // Expected output: Array [ 'E', 'N', 'F', 'A' ]