/*

Miniactivity
- create a class Person, with an empty constructor parameters
- inside of the constructor function
    - check if the instance is an instance of the Person class
        - if it is, create a new Error instance to send the message "Object cannot be created from an abstract class Person"
- instantiate the Person class and check the DevTools output
- you may send the console output in our Batch Space
*/



// 1. Abstraction is the concept of showing only the important details hiding complexity. It helps you focus on what something does, without worrying how it works. 

// 2. Blue print for other classes
// if class is a blue print in creating objects, abstract class on the other hand, is a blue print in creating classes (sub-classes).


class Person {
    constructor(){
         if (this.constructor === Person) {
            //checks if we used the new Person()
            throw new Error(
                "Object cannot be created from an abstract class Person"
            );
        }
         if (this.getFullName === undefined) {
            //This makes sure that all instances from Person should have the getFullName() method
            throw new Error(
                "Class must implement getFullName() method"
            )
        }
        if (this.getFirstName === undefined) {
            //If not defined in object instantiated from this base class
            throw new Error(
                "Class must implement getFirstName method"
            );
        }

        if (this.getLastName === undefined) {
            //If not defined in object instantiated from this base class
            throw new Error(
                "Class must implement getLastName method"
            );
        }       
    }
}

class Employee extends Person{
    constructor(firstName, lastName, employeeID){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeID = employeeID
    }


    getFullName() {
        return `${this.firstName} ${this.lastName} has employee ID of ${this.employeeID}`;
    }

    getFirstName() {
        return `First Name: ${this.firstName}`;
    }

    getLastName() {
        return `Last Name: ${this.lastName}`;
    }
}

let employeeA = new Employee("John", "Smith", "EM-004");
console.log(employeeA.getFirstName());
console.log(employeeA.getLastName());
console.log(employeeA.getFullName());


class Student extends Person{
    constructor(firstName, lastName, studentID, section){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentID = studentID;
        this.section = section;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} has student ID of ${this.studentID}`;
    }

    getFirstName() {
        return `First Name: ${this.firstName}`;
    }

    getLastName() {
        return `Last Name: ${this.lastName}`;
    }

    // it's not okay to have lesser function than the required functions from the abstract class, but it's okay to add another function once all the functions required to implement was already built.
    getStudentDetails() {
        return `${this.firstName} ${this.lastName}, with a student ID of ${this.studentID}, belongs to the ${this.section} section.`;
    }
}


let student1 = new Student("Brandon", "Ingram", "s001", "Sec-001" );
console.log(student1.getFirstName());
console.log(student1.getLastName());
console.log(student1.getFullName());
console.log(student1.getStudentDetails());

/*

class Car {
 constructor(){
      if (this.constructor === Honda) {
            //checks if we used the new Person()
            throw new Error(
                "Object cannot be created from an abstract class Car"
            );
        }
        if (this.drive === undefined) {
            
            throw new Error(
                "Class must implement drive() method"
            )
        }
        
 }
}


class Honda extends Car{
 constructor(model){
     this.model = model;
 }

 drive(){
     console.log("Tilt ignition switch");
     console.log("Presses gas pedal");
 }
}

*/
