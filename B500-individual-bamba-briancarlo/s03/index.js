// console.log("Hello World");

// Therer are two ways of creating a blueprint in Javascript

// [SECTION] Prototypes
// "constructor function" - use to create prototypes.

// PascalCase is used as naming convention for blueprint creation Prototype/classes
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;

	this.greet = function(){
		console.log(`Hello, my name is ${this.name}`);
	}
}

// Instantiate a new object
// Create a object from the blueprint (prototype/class)
// "new" keyword is used to instantiate an object from a prototype/class.

let personOne = new Person("John", 25, "male");
console.log(personOne);

// Create an object from a prototype using Object.create()
let personTwo = Object.create(Person.prototype);
console.log(personTwo);
Person.call(personTwo, "Jay", 30, "male");
console.log(personTwo);

// Create an object without any prototype:
let personThree = Object.create(null)

personThree.name = "Joe";
personThree.age = "20";

console.log(personThree);

//Mini Activity

// Create a Computer prototype using a constructor.

// It should have 5 fields.
    //name
    //manufacturer
    //color
    //owner
    //addedOn (Date)

// It should have 3 methods
    //startUp
        //Display a message for starting up while greeting the user.
    //shutDown
        //Display a message for shutting down while greeting the user.
    //run
        //receives an argument and displays a message as "<nameOfComputer> is running <appName>"

// Create 2 Computer objects.
// Log the Computer objects in the console.
// Invoke Computer 1's startuUp method.
// Invoke Computer 1's shutDown method.
// Invoke Computer 2's run method.

function Computer(name, manufacturer, color, owner, addedOn){
    this.name = name;
    this.manufacturer = manufacturer;
    this.color = color;
    this.owner = owner;
    this.addedOn = new Date(addedOn);

    
    this.startUp = function(){
        console.log(`Welcome to ${this.name}!`);
    }
    
    this.shutDown = function(){
        console.log(`Goodbye from ${this.name}!`);
    }
    
    this.run = function(appName){
        console.log(`${this.name} is running ${appName}`);
    } 
    

}

let computerOne = new Computer('Macbook Pro', 'Apple', 'Silver', 'Joey', '2023-03-08');
let computerTwo = new Computer('Dell XPS', 'Dell', 'Black', 'Michael', '2023-12-01');

computerOne.startUp();
computerOne.shutDown();
computerTwo.run('Google Chrome');

// [SECTION] JS Classes

// Why does Javascript encourage the use of Classes for object blueprints when we can already use constructor functions and prototypes?

//To provide a more flexible way and a more familiar way of creating codes for object creation for developers familiar with other OOP languages

//Classes in JS offer a more concise and readable way for defining object blueprints, handle inheritance, encapsulate methods and support OOP principles found in other languages.

// Class in Javascript:
// class <ClassName> {}

	class Student {
		// constructor keyword is a special keyword in JS used in classes.
		// it usually receives arguments that are initial values of an instantiated object from the class.
		constructor (name, email, grades){
			// We use the "this" keyword to assign intial values from our arguments to our new objects.
			this.name = name;
			this.email = email
			this.average = undefined;
			this.isPassing = undefined;
			this.isPassingWithHonors = undefined;

			// Validate grades
			// Grades must be an array with 4 elements
			if(grades.length === 4){
				// if all grades are greater than or equal to zero AND less than or equal to 100
				if(grades.every(grade => grade >= 0 && grade <= 100)){
					this.grades = grades
				}
				else{
					this.grades = undefined;
				}
			}
			else{
				this.grades = undefined;
			}
		}

		// Class Methods
		// function inside an object
		// Adding methods in class will allow us to create instances of class with the same copies of the methods inside.

		login(){
			console.log(`${this.email} has logged in`)
			// To allow method chaining, we should be able to return a reference of the object itself, which is in this case, can be "this"
			return this
		}

		logout(){
			console.log(`${this.email} has logged out`)
			return this
		}

		listGrades(){
			console.log(`${this.name}'s quarterly grades are: ${this.grades}`)
			return this
		}

// ACTIVITY s03

		computeAve() {
			if (this.grades) {
				this.average = this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
			}
			return this;
		}

		willPass() {
			if (this.average !== undefined) {
				this.isPassing = this.average >= 75;
			}
			return this; 
		}

		willPassWithHonors() {
			if (this.average !== undefined) {
				this.isPassingWithHonors = this.average >= 90;
			}
			return this;
		}

	}

	let studentOne = new Student("James", "james@mail.com", [85, 86, 89, 90]);
	console.log(studentOne);
	let studentTwo = new Student("Juan", "juan@mail.com", [90, 91, 80, 96]);
	console.log(studentTwo);
	let studentThree = new Student("Miguel", "miguel@mail.com", [91, 92, 91, 90]);
	console.log(studentThree);
	let studentFour= new Student("Annie", "annie@mail.com", [85, 86, 85, 85]);
	console.log(studentFour);

	// studentOne.login()
	// studentOne.listGrades()
	// studentOne.logout()

// Method Chaining
// A way to chain methods from single object together.
// Advantages:
// 1. Readability: more concise and readable
// 2. Convenience: easier to cascasde the methods together.

	// studentOne.undefined.listGrades()
	// studentOne.login().listGrades().logout();

	console.warn("studentOne.computeAve().willPass().willPassWithHonors()")
	console.log(studentOne.computeAve().willPass().willPassWithHonors());

	studentOne.computeAve().willPass().willPassWithHonors()

	