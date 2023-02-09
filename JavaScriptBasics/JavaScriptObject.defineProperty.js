/* JavaScript Object.defineProperty()

In JavaScript, you can also use Object.defineProperty() method to add getters and setters. For example,*/

const student = {
    firstName: 'Monica'
}
// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});
// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.getName); // Monica

// changing the property value
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah

/*In the above example, Object.defineProperty() is used to access and change the property of an object.

The syntax for using Object.defineProperty() is:

Object.defineProperty(obj, prop, descriptor)
The Object.defineProperty() method takes three arguments.

The first argument is the objectName.
The second argument is the name of the property.
The third argument is an object that describes the property.*/