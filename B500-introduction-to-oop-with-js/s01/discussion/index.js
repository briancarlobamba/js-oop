// Objects
// console.log("Hello World");


// Approach 1 in creating object
// Using Template Leterals

let dog = {
	name: "Max",
	age: 10,
	breed: "Golder Retriever",
	color: "Gold",
	bark: function(){
		console.log("Woof! Woof!");
	}
}

// Syntax object.property / method
console.log(dog.name);
dog.bark();
console.log(dog);


// Approach 2 in creating object
// Using Object.create()
let employee = Object.create(Object.prototype);
employee.firstName = "Jenniffer";
employee.lastName = "Lopez";
employee.age = 22;
employee.job = "Software Engineer";

console.log(employee);

// .create() 
// Creates a new object with the specified prototype
// Syntax Object.create(prototype);

// What is a prototype
// In javascript, a prototype is like a blueprint or template for objects, Every object has a prototype, which is another object that it can borrow properties and methods from.

let employee2 = Object.create(Object.prototype);
employee2.firstName = "Beyonce Giselle";
employee2.lastName = "Knowles";
employee2.age = 23;
employee2.job = "Project Leader";

console.log(employee2);


let employee3 = Object.create(null);
employee3.firstName = "Michael";
employee3.lastName = "Jackson";
employee3.age = 20;
employee3.job = "Project Manager";

console.log(employee3);
// console.log(employee3.toString());

// creates an array that will have all the properties / keys
let employee2Keys = Object.keys(employee2);
console.log(employee2Keys);

// creates an array that will have all the values of the object
let employee2Values = Object.values(employee2);
console.log(employee2Values);

// Object.freeze()
// Prevents the given object argument from being modified and it will only return the unmodified object.
// Syntax: Object.freeze(object);
let employee2Frozen = Object.freeze(employee2);
employee2Frozen.age = 24;
console.log(employee2Frozen);

const employee4 = {
	firstName: "Alice",
	lastName: "Wonderland"
}
employee4.firstName = "Aliss";
// employee4 ={
// 	firstName: "Aling",
// 	lastName: "Wonderland"
// }
console.log(employee4);

// hasOwnProperty() - returns boolean value if the specific key/property exist or not.
console.log(employee2.hasOwnProperty("job"));  // true
console.log(employee2.hasOwnProperty("age"));  // true
console.log(employee2.hasOwnProperty("hobby"));  // hobby


// ----------------
// Arrays

let numbers = [1,2,3,4,5];
console.log(numbers);

let numbers2 = new Array(6,33,8,32,23);
console.log(numbers2);
console.log(typeof numbers);
console.log(typeof numbers2);
numbers2.push(100);

// Array.from()
// creates a new array from an iterable object (like an array-like object)
// Syntax: Array.from(iterableObject);
let numbers3 = Array.from(numbers2);
console.log(numbers3);

let charArr = Array.from("hello"); // Creates an array from a provided string
console.log(charArr);

console.log(Array.isArray(numbers)); // true 
console.log(Array.isArray(numbers2)); // true 
console.log(Array.isArray(numbers3)); // true 
console.log(Array.isArray(charArr)); // true 
console.log(Array);  // not suggested
console.log(numbers);

let numbers4 = Array.of(1,2,3,4,5)
console.log(numbers4)
console.log(Array.isArray(numbers4)); // true


// Dates

// Date.now()
// Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
// Syntax: Date.now();
let millisecondsNow = Date.now();
console.log(millisecondsNow);

// converts millisecondsNow date to a readable date
let dateNow = new Date(millisecondsNow);
console.log(dateNow);

// converts formatted date to milliseconds
// .parse() - converts formatted date to milliseconds
let millisecondsFromString = Date.parse("2023-03-08")
console.log(millisecondsFromString)

let dateFromString = new Date(millisecondsFromString);
console.log(dateFromString);
console.log(Date.prototype);

// Math
console.log(Math);

console.log(Math.E); // Euler's number
console.log(Math.PI); // Pi value
console.log(Math.SQRT2); // Square root of 2
console.log(Math.SQRT1_2); // Square root of 1/2
console.log(Math.LN2); // natural logarithm of 2
console.log(Math.LN10); // natural logarithm of 10
console.log(Math.LOG2E); // base 2 logarithm of E
console.log(Math.LOG10E); // base 10 logarithm of E

console.log(Math.round(3.14)) // 3 - Round to the nearest integer
console.log(Math.floor(3.14)) // 3- Round down to its nearest integer
console.log(Math.ceil(3.14)) // 4- Round up to its nearest integer
console.log(Math.trunc(3.14)) // 3- returns onlt the integer part
// 3.5 -> 4 
// .0 -> .4 = round down
// .5 -> .9 = round up

let squareRoot = Math.sqrt(25); // 5 x 5 = 25
console.log(squareRoot);

let min = Math.min(-4, 0, 3); // -4
console.log(min);

let max = Math.max(-4, 0, 3); // 3
console.log(max);

console.log("Random number / Random winner !")
let random = Math.random() * 100; // random number
console.log(Math.round(random));



console.log(JSON);

// JSON = {
// 	isRawJSON : function(){}
// 	parse: function(){}
// 	rawJSON: function(){}
// 	stringify: function(){}
// }

console.log("---------------");

// accessible object to stringify / JSON formatted data
let JSONFormat = JSON.stringify(employee2);
console.log(JSONFormat);

// client app (Caps 3) -> JSON Formatted Data <- server app (Caps 2)

// JSON formatted data to accessible object
let convertedJSON = JSON.parse(JSONFormat);
console.log(convertedJSON);
convertedJSON.firstName = "BeeyondSay";
convertedJSON.address ="Hollywood";
console.log(convertedJSON);

// --------------------

// Primitive Data Types

// Primitive wrappers allow JS to use methods and properties on primitive datatypes. For example, .length;

let sampleString = "She knows"; // 9
console.log(sampleString);

console.log(sampleString.length); 
console.log(sampleString.charAt(0));

let sampleNumber = 123.45;
console.log(sampleNumber)
console.log(sampleNumber.toString());


// -----------------

// These will help us to check what are the predefined methods and properties that we could use -->

// Primitive Wrappers as Constructors
let myString = new String("Hello, world");
console.log(myString);

let myNumber = new Number("123.45");
console.log(myNumber);


// Boolean objects are created using the new Boolean() constructor.
let myBoolean = new Boolean("true");
console.log(myBoolean)

// String objects have a number of methods that can be used to manipulate strings.

let allCaps = myString.toUpperCase();
console.log(allCaps)

// Number objects have a number of methods that can be used to perform mathematical operations.
let squared = myNumber.toFixed(2);
console.log(squared)

// Boolean objects have a number of methods that can be used to compare values.
let isTrue = myBoolean.valueOf();
console.log(isTrue)














