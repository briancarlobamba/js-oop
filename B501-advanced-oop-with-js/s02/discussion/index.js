	class Person {
		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		getFullName() {
			return `The person's name is ${this.firstName} ${this.lastName}.`
		}
	}

	// sub-class
	class Employee extends Person {
		constructor(firstName, lastName, employeeId) {
			super(firstName, lastName);
			this.employeeId = employeeId;
		}
		// redefining getFullName() overrieds the inherited method from the parent class
		// once overriden, the objects instantiated from the Employee class will now follow the new definition
		/*getFullName() {
			return `The employee's name is ${this.firstName} ${this.lastName}`
		}*/
		// we can now use the original implementation in combination with our new method definition
		getFullName() {
			return super.getFullName() + ` With employee ID of ${this.employeeId}.`
		}
	}

	const personA = new Person("Jane", "Smith");
	console.log(personA.getFullName());


	const employeeA = new Employee("John", "Smith", "EM-004");
	console.log(employeeA.getFullName());



// Mini Activity
	
/*	
	- create a new class TeamLead that is a child of Employee
	- in the TeamLead, override the Employee's getFullName() to add " and he/she is a teamlead"
	- instantiate the new TeamLead class and access/display in console the return value of its getFullName() method
*/
	
	class TeamLead extends Employee {
		// since our TeamLead this time will retain the same properties as the Employee class without additional ones, we can skip defining the properties
		/*constructor(firstName, lastName, employeeId) {
			super(firstName, lastName, employeeId);
		}*/

		getFullName() {
			return super.getFullName() + ` And he/she is a Team Lead.`
		} 
	}

	const teamLead1 = new TeamLead("Juan", "Dela Cruz", "TL-001");
	console.log(teamLead1.getFullName());

// Parameter Overloading
	// is a concept where multiple methods with the same name are defined within a class/object, but with different parameter list
	class Calculator {
		/*add(num1, num2) {
			return num1 + num2;
		}*/

		/*add(num1, num2, num3) {
			return num1 + num2 + num3;
		}*/

		add(num1, num2, num3) {
		/* Mini Activity
		
			include a condition that if there are no parameters passed, it will return "Please provide parameters in the function calling"
		 */
			if (typeof num1 === 'undefined') {
				return "Please provide parameters in the function calling" // no parameters provided
			} else if (typeof num2 === 'undefined' && typeof num3 === 'undefined') {
				return num1; // handling only one parameter passed
			} else if (typeof num3 === 'undefined') {
				return num1 + num2; // handling only 2 parameters passed
			} else {
				return num1 + num2 + num3; // all parameters provided
			}
		}
	}

	const calc = new Calculator();
	console.log(calc.add());
	console.log(calc.add(5));
	console.log(calc.add(5, 3)); 
	console.log(calc.add(5, 3, 1)); 
