/* Memory concept in JavaScript like Global,Local,Block,Script */

//Assignment 1

// All Varaible in function are stored in Local Memory.

function add(x,y) {

// In Block var varaible are stored in Local Memory when it was inside function and let, const are stored in Block Memory.
{
    var m = 40;
    console.log("var in Local Memory : "+m);
    
    let n = 50;
    console.log("let in Block Memory : "+n);
    
    const o = 60;
    console.log("const in Block Memory : "+o);

}

    let z = x+y;
    console.log("let in Local Memory : "+z);

    var p = 10;
    console.log("var in Local Memory : "+p);
    
    let q = 20;
    console.log("let in Local Memory : "+q);
    
    const r = 30;
    console.log("const in Local Memory : "+r);

    return m;
}

var f = add(2,3);
console.log("return value : "+f);

