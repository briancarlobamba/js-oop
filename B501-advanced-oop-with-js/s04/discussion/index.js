class Person {
	constructor() {
		if (this.constructor === Person) {
			throw new Error("Object can't be instantiated from abstract class");
		}

		if(this.getFullName === undefined) {
			throw new Error("Class must implement getFullName() method");
		}
	}
};

class Employee extends Person {

	// Properties
	// Hash names are also know as private class properties because they're only accessible from within the said class
	// These should be declared OUTSIDE the class constructor

	#firstName;
	#lastName;
	#employeeId;

	// Constructor functions
	constructor(firstName, lastName, employeeId) {
		super();
		// make sure to prefix the property name with a hash symbol
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#employeeId = employeeId;
	}

	// Getters and Setters

	// Invoke this method/function to set the passed-in argument via the firstName parameter as the new value of the #firstName private property
	setFirstName(firstName) {
		// If validations are needed such as checking for the correct data type, etc. Those would be defined here before updating the value of the private property
		this.#firstName = firstName;
	}

	// method for retrieving the value of the private property #firstName from outside this class
	getFirstName() {
		return this.#firstName
	}

// START of Mini-activity
	setLastName(lastName) {
		this.#lastName = lastName;
	}

	getLastName() {
		return this.#lastName
	}

	setEmployeeId(employeeId) {
		this.#employeeId = employeeId;
	}

	getEmployeeId() {
		return this.#employeeId;
	}

	// Object Methods/Functions/Actions

	getFullName() {
		return `The employee name is ${this.#firstName} ${this.#lastName} with ID of ${this.#employeeId}.`
	}
// END of Mini-activity
};

// This is the previous example without encapsulation:
// const employeeA = new Employee("John", "Doe", "EM-123");
// console.log(employeeA);

// This is an example of directly accessing the private property of the Employee class
// const employeeA = new Employee();
// console.log(employeeA.#firstName);

// This is an example of modifying the value of the #firstName property using the setter function of the Employee class
// const employeeA = new Employee();
// employeeA.setFirstName("John");
// console.log(employeeA);
// console.log(employeeA.getFirstName());


/*
Mini-Activity
	- Convert the lastName and employeeID into private properties. Define getters and setters for each.

	- Then in the getFullName() method, access the private properties to print out the complete information of the employee.
		Sample string in getFullName() method:
			"The employee name is John Doe with ID of 123."
*/

//test input

//object instantiation using default constructor
const employeeA = new Employee();
employeeA.setFirstName('John');
employeeA.setLastName('Smith');
employeeA.setEmployeeId('EM-004');

//object instantiation using parameterized constructor
const employeeB = new Employee("Jill", "Hill", "EM-002")

console.log(employeeA.getFullName());//The employee name is John Smith with ID of EM-004

console.log(employeeB.getFullName());//The employee name is Jill Hill with ID of EM-002