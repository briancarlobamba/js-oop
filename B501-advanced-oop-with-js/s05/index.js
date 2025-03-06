class Person {
    constructor() {
        if (this.constructor === Person) {
            throw new Error("Object can't be instantiated from abstract class");
        }

        if (this.constructor === Employee) {
            if (this.addRequest === undefined) {
                throw new Error("Employee class must implement addRequest() method");
            }
        } else if (this.constructor === TeamLead) {
            if (this.addMember === undefined) {
                throw new Error("TeamLead class must implement addMember() method");
            }
            if (this.checkRequests === undefined) {
                throw new Error("TeamLead class must implement checkRequests() method");
            }
        } else if (this.constructor === Admin) {
            if (this.addTeamLead === undefined) {
                throw new Error("Admin class must implement addTeamLead() method");
            }
            if (this.deactivateTeam === undefined) {
                throw new Error("Admin class must implement deactivateTeam() method");
            }
        }

        if (this.getFullName === undefined) {
            throw new Error("Class must implement getFullName() method");
        }
        if (this.login === undefined) {
            throw new Error("Class must implement login() method");
        }
        if (this.logout === undefined) {
            throw new Error("Class must implement logout() method");
        }
    }
}

class Employee extends Person {
	#firstName;
	#lastName;
	#email;
	#department;
	#isActive;
	#requests;
	constructor(firstName, lastName, email, department, isActive = true, requests) {
		super();
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#email = email;
		this.#department = department;
		this.#isActive = isActive;
		this.#requests = [];
	}

	setFirstName(firstName) {
		this.#firstName = firstName;
	}

	setLastName(lastName) {
		this.#lastName = lastName;
	}

	setEmail(email) {
		this.#email = email;
	}

	setDepartment(department) {
		this.#department = department;
	}

	setIsActive(status = true) {
		if (typeof status === 'boolean') {
			this.#isActive = status;
		} else {
			throw new Error("status must be either True or False only");
		}
	}

	getFirstName() {
		return this.#firstName;
	}

	getLastName() {
		return this.#lastName;
	}

	getEmail() {
		return this.#email;
	}

	getDepartment() {
		return this.#department;
	}

	getIsActive() {
		return `${this.#email} isActive: ${this.#isActive}`;
	}

	getFullName() {
	    return `${this.#firstName} ${this.#lastName}`;
	}

	getRequests() {
        return this.#requests;
    }

	login() {
	    return `${this.#firstName} ${this.#lastName} from ${this.#department} department has logged in`;
	}

	logout() {
	    return `${this.getFullName()} has logged out`;
	}

	addRequest(request) {
		return this.#requests.push(request);
	}
}

class TeamLead extends Person {
	#firstName;
	#lastName;
	#email;
	#department;
	#isActive;
	#members;
	constructor(firstName, lastName, email, department, isActive = true, members) {
		super();
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#email = email;
		this.#department = department;
		this.#isActive = isActive;
		this.#members = [];
	}

	setFirstName(firstName) {
		this.#firstName = firstName;
	}

	setLastName(lastName) {
		this.#lastName = lastName;
	}

	setEmail(email) {
		this.#email = email;
	}

	setDepartment(department) {
		this.#department = department;
	}

	setIsActive(status = true) {
		if (typeof status === 'boolean') {
			this.#isActive = status;
		} else {
			throw new Error("status must be either True or False only");
		}
	}

	getFirstName() {
		return this.#firstName;
	}

	getLastName() {
		return this.#lastName;
	}

	getEmail() {
		return this.#email;
	}

	getDepartment() {
		return this.#department;
	}

	getIsActive() {
		return `${this.#email} isActive: ${this.#isActive}`;
	}

	getFullName() {
	    return `${this.#firstName} ${this.#lastName}`;
	}

	getMembers() {
        return this.#members;
    }

	login() {
	    return `${this.#firstName} ${this.#lastName} from ${this.#department} department has logged in`;
	}

	logout() {
	    return `${this.getFullName()} has logged out`;
	}

	addMember(member) {
		return this.#members.push(member);
	}

	checkRequests(employeeEmail) {
	    let result = `No member with email: ${employeeEmail}`;
	    
	    this.#members.forEach(member => {
	        if (member.getEmail() === employeeEmail) {
	            const requests = member.getRequests();
	            if (requests && requests.length > 0) {
	                result = requests;
	            } else {
	                result = `${member.getFullName()} has no requests.`;
	            }
	        }
	    });

	    return result;
	}
}

class Admin extends Person {
	#firstName;
	#lastName;
	#email;
	#department;
	#teamLeads;
	constructor(firstName, lastName, email, department, teamLeads) {
		super();
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#email = email;
		this.#department = department;
		this.#teamLeads = [];
	}

	setFirstName(firstName) {
		this.#firstName = firstName;
	}

	setLastName(lastName) {
		this.#lastName = lastName;
	}

	setEmail(email) {
		this.#email = email;
	}

	setDepartment(department) {
		this.#department = department;
	}

	getFirstName() {
		return this.#firstName;
	}

	getLastName() {
		return this.#lastName;
	}

	getEmail() {
		return this.#email;
	}

	getDepartment() {
		return this.#department;
	}

	getFullName() {
	    return `${this.#firstName} ${this.#lastName}`;
	}

	getTeamLeads() {
		return this.#teamLeads;
	}

	login() {
	    return `${this.#firstName} ${this.#lastName} from ${this.#department} has logged in`;
	}

	logout() {
	    return `${this.getFullName()} has logged out`;
	}

	addTeamLead(teamLead) {
		return this.#teamLeads.push(teamLead);
	}

	deactivateTeam(teamLeadEmail) {
	    let result = `No team lead with email: ${teamLeadEmail}`;

	    this.#teamLeads.forEach(teamLead => {
	        if (teamLead.getEmail() === teamLeadEmail) {
	            teamLead.setIsActive(false);
	            console.log(`Team Lead ${teamLead.getFullName()} has been deactivated.`);

	            const members = teamLead.getMembers();
	            members.forEach(member => {member.setIsActive(false);
	            	console.log(`Employee ${member.getFullName()} has been deactivated.`);
	            	});
	           
	            result = `${teamLead.getFullName()} and all team members have been deactivated.`;
	        }
	    });

	    return result;
	}
}

class Request {
	constructor(requesterEmail, content, dateRequested) {

		this.requesterEmail = requesterEmail;
		this.content = content;
		this.dateRequested = dateRequested;
	}

	setRequesterEmail(requesterEmail) {
        if (typeof requesterEmail === 'string' && requesterEmail.includes('@')) {
            this.requesterEmail = requesterEmail;
        } else {
            throw new Error('Invalid email format.');
        }
    }

    setContent(content) {
        if (typeof content === 'string') {
            this.content = content;
        } else {
            throw new Error('Content must be a string.');
        }
    }

    setDateRequested(dateRequested) {
        if (dateRequested instanceof Date) {
            this.dateRequested = dateRequested;
        } else {
            throw new Error('dateRequested must be a Date object.');
        }
    }

    getRequesterEmail() {
        return this.requesterEmail;
    }

    getContent() {
        return this.content;
    }

    getDateRequested() {
        return this.dateRequested;
    }
}


// Employees

	const employee1 = new Employee();
	employee1.setFirstName("John");
	employee1.setLastName("Doe");
	employee1.setEmail("john.doe@mail.com");
	employee1.setDepartment("IT");
	employee1.setIsActive(true);
	console.log(employee1.login());
	console.log(employee1.getFullName());
	employee1.addRequest(new Request("john.doe@mail.com", "Request 1", new Date()));
	employee1.addRequest(new Request("john.doe@mail.com", "Request 2", new Date()));
	employee1.addRequest(new Request("john.doe@mail.com", "Request 3", new Date()));
	employee1.addRequest(new Request("john.doe@mail.com", "Request 4", new Date()));
	console.log(employee1.getIsActive());
	console.log(employee1.getRequests());
	console.log(employee1.logout());

	const employee2 = new Employee();
	employee2.setFirstName("Jane");
	employee2.setLastName("Smith");
	employee2.setEmail("jane.smith@mail.com");
	employee2.setDepartment("HR");
	employee2.setIsActive(true);
	console.log(employee2.login());
	employee2.addRequest(new Request("jane.smith@mail.com", "Request 1", new Date()));
	employee2.addRequest(new Request("jane.smith@mail.com", "Request 2", new Date()));
	console.log(employee2.getIsActive());
	console.log(employee2.getRequests());
	console.log(employee2.logout());

	const employee3 = new Employee();
	employee3.setFirstName("Robert");
	employee3.setLastName("Brown");
	employee3.setEmail("robert.brown@mail.com");
	employee3.setDepartment("Finance");
	employee3.setIsActive(true);
	console.log(employee3.login());
	employee3.addRequest(new Request("robert.brown@mail.com", "Request 1", new Date()));
	employee3.addRequest(new Request("robert.brown@mail.com", "Request 2", new Date()));
	console.log(employee3.getIsActive());
	console.log(employee3.getRequests());
	console.log(employee3.logout());

	const employee4 = new Employee();
	employee4.setFirstName("Emily");
	employee4.setLastName("Davis");
	employee4.setEmail("emily.davis@mail.com");
	employee4.setDepartment("Marketing");
	employee4.setIsActive(true);
	console.log(employee4.login());
	console.log(employee4.getFullName());
	employee4.addRequest(new Request("emily.davis@mail.com", "Request 1", new Date()));
	employee4.addRequest(new Request("emily.davis@mail.com", "Requestp 2", new Date()));
	console.log(employee4.getIsActive());
	console.log(employee4.getRequests());
	console.log(employee4.logout());

	const employee5 = new Employee();
	employee5.setFirstName("Michael");
	employee5.setLastName("Johnson");
	employee5.setEmail("michael.johnson@mail.com");
	employee5.setDepartment("Sales");
	employee5.setIsActive(true);
	console.log(employee5.login());
	console.log(employee5.getFullName());
	employee5.addRequest(new Request("michael.johnson@mail.com", "Request 1", new Date()));
	employee5.addRequest(new Request("michael.johnson@mail.com", "Request 2", new Date()));
	console.log(employee5.getIsActive());
	console.log(employee5.getRequests());
	console.log(employee5.logout());

	const employee6 = new Employee();
	employee6.setFirstName("Sarah");
	employee6.setLastName("Wilson");
	employee6.setEmail("sarah.wilson@mail.com");
	employee6.setDepartment("Operations");
	employee6.setIsActive(true);
	console.log(employee6.login());
	console.log(employee6.getFullName());
	employee6.addRequest(new Request("sarah.wilson@mail.com", "Request 1", new Date()));
	employee6.addRequest(new Request("sarah.wilson@mail.com", "Request 2", new Date()));
	console.log(employee6.getIsActive());
	console.log(employee6.getRequests());
	console.log(employee6.logout());

// Team Lead

	const teamLead1 = new TeamLead();
	teamLead1.setFirstName("Alice");
	teamLead1.setLastName("Williams");
	teamLead1.setEmail("alice.williams@mail.com");
	teamLead1.setDepartment("IT");
	teamLead1.setIsActive(true);
	console.log(teamLead1.login());
	teamLead1.addMember(employee1);
	teamLead1.addMember(employee2);
	console.log(teamLead1.getMembers());
	console.log(teamLead1.checkRequests("john.doe@mail.com"));
	console.log(teamLead1.logout());

	const teamLead2 = new TeamLead();
	teamLead2.setFirstName("David");
	teamLead2.setLastName("Martinez");
	teamLead2.setEmail("david.martinez@mail.com");
	teamLead2.setDepartment("HR");
	teamLead2.setIsActive(true);
	console.log(teamLead2.login());
	teamLead2.addMember(employee3);
	teamLead2.addMember(employee4);
	console.log(teamLead2.getMembers());
	console.log(teamLead2.checkRequests("robert.brown@mail.com"));
	console.log(teamLead2.logout());

// Admin

	const admin1 = new Admin();
	admin1.setFirstName("Nancy");
	admin1.setLastName("Lopez");
	admin1.setEmail("nancy.lopez@mail.com");
	admin1.setDepartment("Admin");
	console.log(admin1.login());
	admin1.addTeamLead(teamLead1);
	admin1.addTeamLead(teamLead2);
	console.log(admin1.getTeamLeads());
	console.log(admin1.deactivateTeam("alice.williams@mail.com"));
	console.log(admin1.logout());
