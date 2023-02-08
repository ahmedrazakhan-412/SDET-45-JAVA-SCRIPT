    console.log(a);   // undefined
    var a 
    a = 100;
    var a =200
    console.log(a);   //200
    /*
    //****************************************************************************************/
    
    console.log(x); // undefined   Identifier 'x' has already been declared
    var x 
    x = 20
    let x = 35    
    x = 95              
    console.log(x); //95

    //****************************************************************************************/
    
    const y = 3.1415;
    
    function fun1() {
        console.log("local");
    }
    // y = 3;                  
    console.log(y); //3.1415    
    
    //****************************************************************************************/
    
    {
        var b = "Rekha"
        let w = "welcome"  
    }
    console.log(b); // Rekha
    console.log(w); //  w is not defined
    
    //****************************************************************************************/
    
    console.log(index);        // undefined
    for (var index = 0; index < 5; index++) {
        console.log(index); //0 1 2 3 4
    }                                                
    console.log(index);    // 0 1 2 3 4 5
    
    //****************************************************************************************/
    
    console.log(index);      // undefined
    for (let index = 0; index < 5; index++) {
        console.log(index);          //0 1 2 3 4           
    }
    console.log(index);        //    index is not defined
    
    //****************************************************************************************/
    
    var a = 100;
    console.log(a);// 100   
    {
        var a = 200
        console.log(a);  //200
    }
    console.log(a);   //200
    
    //****************************************************************************************/
    
    let x = 10
    {
        let x = 20
    }
    console.log(x);  //10 
    
    //****************************************************************************************/
    
    var a = 20
    let a = 30
    console.log(a);  //Identifier 'a' has already been declared

    //****************************************************************************************/