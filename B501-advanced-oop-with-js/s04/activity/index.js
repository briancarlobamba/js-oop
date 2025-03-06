class User {
	constructor() {
		if (this.constructor === User) {
			throw new Error("Object can't be instantiated from abstract class");
		}

		if (this.login === undefined) {
			throw new Error("Class must implement login() method");
		}

		if (this.register === undefined) {
			throw new Error("Class must implement register() method");
		}

		if (this.logout === undefined) {
			throw new Error("Class must implement logout() method");
		}
	}
};

class RegularUser extends User {
	#name;
	#email;
	#password;
	constructor(name, email, password) {
		super();
		this.#name = name;
		this.#email = email;
		this.#password = password;
	}

	setName(name) {
		this.#name = name;
	}

	setEmail(email) {
		this.#email = email;
	}

	setPassword(password) {
		this.#password = password;
	}

	getName() {
		return this.#name
	}

	getEmail() {
		return this.#email
	}

	getPassword() {
		return this.#password
	}

	login() {
		return `${this.#name} has logged in.`
	}

	register() {
		return `${this.#name} has registered.`
	}

	logout() {
		return `${this.#name} has logged out.`
	}

	browseJobs() {
		return "There are 10 jobs found."
	}
}

class Admin extends User {
	#name;
	#email;
	#password;
	#hasAdminExpired;
	constructor(name, email, password, hasAdminExpired) {
		super();
		this.#name = name;
		this.#email = email;
		this.#password = password;
		this.#hasAdminExpired = hasAdminExpired;
	}

	setName(name) {
		this.#name = name;
	}

	setEmail(email) {
		this.#email = email;
	}

	setPassword(password) {
		this.#password = password;
	}

	setHasAdminExpired(status) {
		if (typeof status === 'boolean') {
			this.#hasAdminExpired = status;
		} else {
			throw new Error("hasAdminExpired must be a boolean.");
		}
	}

	getName() {
		return this.#name
	}

	getEmail() {
		return this.#email
	}

	getPassword() {
		return this.#password
	}

	getHasAdminExpired() {
		return this.#hasAdminExpired;
	}

	login() {
		return `Admin ${this.#name} has logged in.`
	}

	register() {
		return `Admin ${this.#name} has registered.`
	}

	logout() {
		return `Admin ${this.#name} has logged out.`
	}

	postJob() {
		return "Job posting added to site."
	}
}

class BankAccount {
	#accountNumber;
	#accountHolderName;
	#balance;
	constructor(accountNumber, accountHolderName, balance) {
		this.#accountNumber = accountNumber;
		this.#accountHolderName = accountHolderName;
		this.#balance = balance;
	}

	setAccountNumber(accountNumber) {
		this.#accountNumber = accountNumber;
	}

	setAccountHolderName(accountHolderName) {
		this.#accountHolderName = accountHolderName;
	}

	setBalance(balance) {
		this.#balance = balance;
	}

	getAccountNumber() {
		return this.#accountNumber
	}

	getAccountHolderName() {
		return this.#accountHolderName
	}

	getBalance() {
		return this.#balance
	}

	deposit(amount) {
		if (amount <= 0) {
			return "Invalid Amount";
		} else {
			this.#balance += amount
			return `Output: Successfully deposited $${amount}. New balance: $${this.#balance}`
		}
	}

	withdraw(amount) {
		if (this.#balance < amount) {
			return "Output: Insufficient Funds.";
		} else if (amount <= 0) {
			return "Invalid Amount";
		} else {
			this.#balance -= amount
			return `Output: Successfully withdrew $${amount}. New balance: $${this.#balance}`
		}
	}
}


// TEST RegularUser
const regUser1 = new RegularUser();
regUser1.setName("Dan");
regUser1.setEmail("dan@mail.com");
regUser1.setPassword("Dan12345");
console.log(regUser1.register());  
console.log(regUser1.login());      
console.log(regUser1.browseJobs()); 
console.log(regUser1.logout());    

// TEST Admin
const admin = new Admin();
admin.setName("Joe");
admin.setEmail("admin_joe@mail.com");
admin.setPassword("joe12345");
admin.setHasAdminExpired(false);
console.log(admin.register());        
console.log(admin.login());           
console.log(admin.getHasAdminExpired()); 
console.log(admin.postJob());        
console.log(admin.logout());      

// TEST BankAccount
const myAccount = new BankAccount(12345678, "John Doe", 1000);
console.log(myAccount.getAccountNumber());       
console.log(myAccount.getAccountHolderName());   
console.log(myAccount.getBalance());             
myAccount.setAccountHolderName("Jane Doe");
myAccount.setBalance(1500);
console.log(myAccount.getAccountHolderName());   
console.log(myAccount.getBalance());             
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(200));            
console.log(myAccount.withdraw(2000));         
