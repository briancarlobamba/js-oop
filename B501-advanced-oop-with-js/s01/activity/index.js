class Contractor {
	constructor(name, email, contactNo) {
		this.name = name;
		this.email = email;
		this.contactNo = contactNo;
	}

	getContractorDetails() {
		console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Contact No: ${this.contactNo}`);
	}
}

let contractor = new Contractor("LeBron James", "the_goat@mail.com", "09123456789");
console.log(contractor);
contractor.getContractorDetails();

class Subcontractor extends Contractor {
	constructor(name, email, contactNo, specializations) {
		super(name, email, contactNo);
		this.specializations = specializations;
	}
	getSubConDetails() {
		this.getContractorDetails();
		console.log(`Specializations: ${this.specializations}`);
	}
}

let subcontractor = new Subcontractor("Bronny James", "baby_goat@mail.com", "09987654321", ["Making Dad Proud", "Being Like Dad", "Not Embarassing Dad"]);
console.log(subcontractor);
subcontractor.getSubConDetails();