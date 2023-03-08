let importClass = require("./anotherclas.js");
console.log("from imported static members : "+importClass.x);
class inherit extends importClass{
 b = 50;
}
var inh = new inherit();
console.log(inh.b);
console.log("from imported non static members : "+inh.a);
