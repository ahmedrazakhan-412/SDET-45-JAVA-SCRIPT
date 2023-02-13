/* JavaScript Class Inheritance */

 class Car {
  a=90;
  static x = 70;
}

class Model extends Car {
  y=88;
  static z=55;
}


let myCar = new Model();
console.log(myCar.a);

module.export = myCar;
//module.export = Model;
