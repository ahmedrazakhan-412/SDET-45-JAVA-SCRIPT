/* Memory concept in JavaScript like Global,Local,Block,Script */

// var varaible are stored in Global Memory and let, const are stored in Script Memory.
var a = 10;
console.log("var in Global Memory : "+a);

let b = 20;
console.log("let in Script Memory : "+b);

const c = 30;
console.log("const in Script Memory : "+c);

// All Varaible in function are stored in Local Memory.
function add(x,y) {

    let z = x+y;
    console.log("let in Local Memory : "+z);

    var p = 10;
    console.log("var in Local Memory : "+p);
    
    let q = 20;
    console.log("let in Local Memory : "+q);
    
    const r = 30;
    console.log("const in Local Memory : "+r);

    // 

}

add(2,3);

// In Block var varaible are stored in Global Memory and let, const are stored in Block Memory.
{
    var m = 40;
    console.log("var in Global Memory : "+m);
    
    let n = 50;
    console.log("let in Block Memory : "+n);
    
    const o = 60;
    console.log("const in Block Memory : "+o);

}