// console.log("Hello world")

class Student {
    constructor(name, email, grades) {
        this.name = name;
        this.email = email;
        if (grades.length === 4) {
            if (grades.every(grade => grade >= 0 && grade <= 100)) {
                this.grades = grades;
            } else {
                this.grades = undefined;
            }
        } else {
            this.grades = undefined;
        }
        this.gradeAve = undefined;
        this.passed = undefined;
        this.passedWithHonors = undefined;
    }

    login() {
        console.log(`${this.email} has logged in`);
        return this;
    }
    logout() {
        console.log(`${this.email} has logged out`);
        return this;
    }
    listGrades() {
        console.log(`${this.name}'s quarterly grade averages are: ${this.grades}`);
        return this;
    }
    computeAve() {
        let sum = 0;
        this.grades.forEach(grade => sum += grade);
        this.gradeAve = sum / 4;
        return this;
    }
    willPass() {
        this.passed = this.computeAve().gradeAve >= 85;
        return this;
    }
    willPassWithHonors() {
        this.passedWithHonors = this.passed && this.gradeAve >= 90;
        return this;
    }
}

// Mini Activity

let studentOne = new Student("Ella", "ella@mail.com", [86, 85, 85, 83]);
console.log(studentOne);
let studentTwo = new Student("George", "george@mail.com", [93, 91, 90, 90]);
console.log(studentTwo);
let studentThree = new Student("Miguel", "migz@mail.com", [75, 78, 80, 89]);
console.log(studentThree);
let studentFour = new Student("Jacod", "jakey@mail.com", [88, 95, 93, 91]);
console.log(studentFour);

class Section {
    // track the number of registered section from within a layer of security instead of global variables.

    // This will allow us to have data/properties within our class only.
    // Static property or methods will not be added to the instances from the object instead it will only be accessible from the class.
    static registeredSections = 0;

    // every Section object will be instantiated with an empty array for its students.
    constructor(name) {
        this.name = name;
        this.students = [];
        this.honorStudents = undefined;
        this.honorsPercentage = undefined;
        Section.registeredSections++;
    }

    // AddStudent method to add students to this section.
    // Composition
    // It allows us to add objects inside another object.
    // Section -> Students
    addStudent(name, email, grades) {
        this.students.push(new Student(name, email, grades));
        return this;
    }

    // Method for computing how many students in the section are honor students.
    countHonorStudents() {
        let count = 0;
        this.students.forEach(student => {
            if (student.computeAve().willPass().willPassWithHonors().passedWithHonors) {
                count++;
            }
        });
        this.honorStudents = count;
        return this;
    }

    computeHonorsPercentage() {
        this.honorsPercentage = (this.honorStudents / this.students.length) * 100;
        return this;
    }

    // Static method are methods that can be accessed from the class itself.
    // For static property to be accessed properly, we added another layer of security by adding a method getting the value
    static getRegisteredSections() {
        return Section.registeredSections;
    }
}

let sectionOne = new Section("St. Andrew");

// Mini Activity
// Access the students array in the section object and push the students in the array.
// Console log your section object and the registeredSections variable.
// Take a screenshot of your output and send it to our gc

sectionOne.students.push(studentOne);
sectionOne.students.push(studentTwo);
sectionOne.students.push(studentThree);
sectionOne.students.push(studentFour);

console.log(sectionOne);
console.log("Number of Sections: " + Section.getRegisteredSections());

let sectionTwo = new Section("St. Bartholomew");
sectionTwo.addStudent("Anya", "anyaF@mail.com", [89, 90, 91, 90]);

console.log(sectionTwo);
console.log("Number of Sections: " + Section.getRegisteredSections());

console.log(sectionOne.countHonorStudents().computeHonorsPercentage());

class Batch {
    constructor(level, year) {
        this.level = level;
        this.year = year;
        this.sections = [];
        this.totalStudents = 0;
        this.totalHonorStudents = 0;
        this.batchAveGrade = undefined;
        this.batchMinGrade = undefined;
        this.batchMaxGrade = undefined;
    }

    addSection(sectionName) {
        const newSection = new Section(sectionName);
        this.sections.push(newSection);
    }

    countStudents() {
        this.totalStudents = this.sections.reduce((sum, section) => sum + section.students.length, 0);
    }

    countHonorStudents() {
        this.totalHonorStudents = this.sections.reduce((sum, section) => {
            section.countHonorStudents();
            return sum + section.honorStudents;
        }, 0);
    }

    computeBatchAve() {
        let totalGradeSum = 0;
        let totalStudentsWithGrades = 0;

        this.sections.forEach(section => {
            section.students.forEach(student => {
                if (student.gradeAve !== undefined) {
                    totalGradeSum += student.gradeAve;
                    totalStudentsWithGrades++;
                }
            });
        });

        this.batchAveGrade = totalStudentsWithGrades > 0 ? totalGradeSum / totalStudentsWithGrades : undefined;
    }

    getBatchMinGrade() {
        let minGrade = Infinity;

        this.sections.forEach(section => {
            section.students.forEach(student => {
                if (student.gradeAve !== undefined && student.gradeAve < minGrade) {
                    minGrade = student.gradeAve;
                }
            });
        });

        this.batchMinGrade = minGrade === Infinity ? undefined : minGrade;
    }

    getBatchMaxGrade() {
        let maxGrade = -Infinity;

        this.sections.forEach(section => {
            section.students.forEach(student => {
                if (student.gradeAve !== undefined && student.gradeAve > maxGrade) {
                    maxGrade = student.gradeAve;
                }
            });
        });

        this.batchMaxGrade = maxGrade === -Infinity ? undefined : maxGrade;
    }
}





// =======================
// TEST CODE FOR ACTIVITY
// =======================

//instantiate new Batch object
const grade1SY23_24 = new Batch (1,"2023-2024");

//add sections to this grade level
grade1SY23_24.addSection('Mahogany');
grade1SY23_24.addSection('Narra');
grade1SY23_24.addSection('Acacia');
grade1SY23_24.addSection('Birch');

//save sections of this grade level as constants
const sectionMahogany = grade1SY23_24.sections.find(section => section.name === "Mahogany");
const sectionNarra = grade1SY23_24.sections.find(section => section.name === "Narra");
const sectionAcacia = grade1SY23_24.sections.find(section => section.name === "Acacia");
const sectionBirch = grade1SY23_24.sections.find(section => section.name === "Birch");

//populate the sections with students
sectionMahogany.addStudent('John', 'john@mail.com', [89, 84, 78, 88]);
sectionMahogany.addStudent('Joe', 'joe@mail.com', [78, 82, 79, 85]);
sectionMahogany.addStudent('Jane', 'jane@mail.com', [87, 89, 91, 93]);
sectionMahogany.addStudent('Jessie', 'jessie@mail.com', [91, 89, 92, 93]);

sectionNarra.addStudent('Jeremy', 'jeremy@mail.com', [85, 82, 83, 89]);
sectionNarra.addStudent('Johnny', 'johnny@mail.com', [82, 86, 77, 88]);
sectionNarra.addStudent('Jerome', 'jerome@mail.com', [89, 85, 92, 91]);
sectionNarra.addStudent('Janine', 'janine@mail.com', [90, 87, 94, 91]);

sectionAcacia.addStudent('Faith', 'faith@mail.com', [87, 85, 88, 91]);
sectionAcacia.addStudent('Hope', 'hope@mail.com', [85, 87, 84, 89]);
sectionAcacia.addStudent('Love', 'love@mail.com', [91, 87, 90, 88]);
sectionAcacia.addStudent('Joy', 'joy@mail.com', [92, 86, 90, 89]);

sectionBirch.addStudent('Eddie', 'eddie@mail.com', [85, 87, 86, 92]);
sectionBirch.addStudent('Ellen', 'ellen@mail.com', [88, 84, 86, 90]);
sectionBirch.addStudent('Edgar', 'edgar@mail.com', [90, 89, 92, 86]);
sectionBirch.addStudent('Eileen', 'eileen@mail.com', [90, 88, 93, 84]);

