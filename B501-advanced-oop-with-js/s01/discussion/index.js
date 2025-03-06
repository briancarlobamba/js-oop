// Mini activity

	/*
	- create a class called User that contains:

	- firstName 
	- lastName
	- email
	- password
	- method
		- getFullName() which returns the firstName and lastName of the User together

	- create a new User object in a variable userA
	- log the userA object in the console
	- invoke the getFullName() method from the userA object

	*/

	// base class/parent/super class

		class User {
		  constructor(firstName, lastName, email, password) {
		    this.firstName = firstName;
		    this.lastName = lastName;
		    this.email = email;
		    this.password = password;
		  }

		  getFullName() {
		    return `${this.firstName} ${this.lastName}`;
		  }
		}

		let userA = new User('John', 'Doe', 'johnDoe@email.com', 'password123');

		console.log(userA);
		console.log(userA.getFullName());

	// subclasses

	/*
		employee
		customer
	*/

	// "extends" is added to a sub-class to indicate that a class is inheriting from another class

		class Customer extends User {
			// we should also add parameters for populating the fields for our parent/base class/super() constructor
			constructor(firstName, lastName, email, password, purchases, paymentMethod) {
				// super() constructor is the constructor of the base class. This allows our subclass instances to actually inherit properties and methods from the parent class
				// Keep in mind the order of the parameters. Order of parameters in the super() should match the parent's constructor
				super(firstName, lastName, email, password);
				this.purchases = purchases;
				this.paymentMethod = paymentMethod;
			}

			// method that is exclusive to the child class
			displayPurchases() {
				this.purchases.forEach(purchase => console.log(purchase));
				return this;
			}
		}

		// not using the right amount AND order of arguments
		let customerA = new Customer(["Toothpaste", "Toothbrush"], "Debit Card");
		console.log(customerA);


		//  using the right amount AND order of arguments
		let customerB = new Customer("James", "Corbin", "jcorbin@email.com", "jimmyC1234", ["Fishing Rod", "Fishing Bait"], "Cash");
		console.log(customerB);

		console.log(customerA.getFullName());
		console.log(customerB.getFullName());

		customerB.displayPurchases();


// Mini Activity

	/*
	- create a sub class Employee
	- this will inherit properties and methods from the User class
	- this subclass should have additional fields such as:
		- employeeId
		- department
		- method
			- getEmployeeDetails
				- return the message "This id <employeeId> belongs to <employee's full name> from <department>"
	- create an instance of the employee class and log it in the console
	- access the objects:
		- getFullName() method - logged in the console
		- getEmployeeDetails() - logged in the console
	*/

		class Employee extends User {

			constructor(firstName, lastName, email, password, employeeId, department) {

				super(firstName, lastName, email, password);
				this.employeeId = employeeId;
				this.department = department;
			}

			getEmployeeDetails() {
				return `This ID ${'"'}${this.employeeId}${'"'} belongs to ${this.firstName} ${this.lastName} from ${this.department} department`
			}
		}

		let employeeA = new Employee("Dahyun", "Kim", "dubu@mail.com", "tofu123", "TW007", "Twice");

		console.log(employeeA);
		console.log(employeeA.getFullName());
		console.log(employeeA.getEmployeeDetails());

	//  a subclass can also be a parent class

		class TeamLeader extends Employee {
			constructor(firstName, lastName, email, password, employeeId, department, role) {
				super(firstName, lastName, email, password, employeeId, department);
				this.role = role;

				this.teamMembers = [];
			}
			// method that allows the TeamLeader to add employees into his teamMembers array
			addTeamMember(employee) {
				this.teamMembers.push(employee);
				return this;
			}
			// method to display the members of the teamMembers array
			displayTeamMembers() {
				this.teamMembers.forEach(member => console.log(member));
				return this;
			}
		}

		let teamLead1 = new TeamLeader("Jihyo", "Park", "jypark@mail.com", "jihyoGod123", "TW004", "Twice", "Team Leader");

		console.log(teamLead1);
		console.log(teamLead1.getFullName());
		console.log(teamLead1.getEmployeeDetails());

		let employeeB = new Employee("Nayeon", "Kim", "nayeon@mail.com", "poppop1", "TW001", "Twice");
		let employeeC = new Employee("Jeongyeon", "Yoo", "jeongyeon@mail.com", "jdc123", "TW002", "Twice");
		let employeeD = new Employee("Momo", "Hirai", "jeongyeon@mail.com", "mds2002", "TW003", "Twice");

		// test the addMembers()

		teamLead1.addTeamMember(employeeA);
		teamLead1.addTeamMember(employeeB);
		teamLead1.addTeamMember(employeeC);
		teamLead1.addTeamMember(employeeD);

		// display the teamLead1's teamMembers array

		teamLead1.displayTeamMembers();
		console.log(teamLead1);