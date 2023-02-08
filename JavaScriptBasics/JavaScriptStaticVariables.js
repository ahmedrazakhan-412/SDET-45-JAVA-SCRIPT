class person { 
    a=50;
    static b = 80;
    constructor(fname,lastname) {
        this.fname=fname;
        this.lastname=lastname;  
    }   

    static staticMethod(data) { 
    var b =55; 
    return "Calling Static method."+data.a+" "+person.b+" Local Varaible : "+b;  
    }  

    nonstaticMethod() {  
    var a =55;
    return "Calling Non Static method."+this.a+" "+person.b+" Local Varaible : "+a;  
    }  
  }  
  
var data = new person("Raza","Khan");
console.log(person.b);
console.log(data.a);
console.log(data.fname);
console.log(person.staticMethod(data));
console.log(data.nonstaticMethod());
