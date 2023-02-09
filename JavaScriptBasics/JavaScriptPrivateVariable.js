//Data can be modify by outers
/*class Student { 
    marks=80;
    get marks() {  
    return this.marks;  
    }  
  }  
  StudentData = new Student();
  StudentData.marks=-20;
  console.log(StudentData.marks);//-20

//Data can be made protected by using _
class Student { 
    _marks=80;
    get marks() {  
    return this._marks;  
    }  
  }  
  StudentData = new Student();
  StudentData.marks=-20;
  console.log(StudentData.marks);//80

//Data can be made private by using $*/
class Student { 
    _marks=80;
    get _marks() {  
    return this._marks;  
    }  
  }  
  StudentData = new Student();
  StudentData._marks=-20;
  console.log(StudentData._marks);//