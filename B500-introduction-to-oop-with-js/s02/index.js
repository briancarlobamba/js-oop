// console.log("Hello World");

// Mini Activity #1

// Spaghetti Code - disorganized and complicated

    /*let studentOneFirstName = "John";
    let studentOneLastName = "Smith";
    let studentOneEmail = "johnSmith@mail.com";
    let studentOneGrades = [89, 84, 78, 88];

    let studentTwoFirstName = "Joel";
    let studentTwoLastName = "Anthony";
    let studentTwoEmail = "jAnthony@mail.com";
    let studentTwoGrades = [78, 82, 79, 85];

    console.log(studentOneFirstName);
    console.log(studentOneLastName);
    console.log(studentOneEmail);
    console.log(studentOneGrades);

    console.log(studentTwoFirstName);
    console.log(studentTwoLastName);
    console.log(studentTwoEmail);
    console.log(studentTwoGrades);*/

// Disadvantages of Disorganized Code:
// 1. Naming Collision 
// 2. Code Clutter
// 3. Maintainability
// 4. Data Integrity
// 5. Code Duplication

// How can we organize the code? Answer: OBJECTS


    /*let studentOne = {
        firstName: "John",
        lastName: "Smith",
        email: "johnSmith@mail.com",
        grades: [89, 84, 78, 88]
    };

    let studentTwo = {
        firstName: "Joel",
        lastName: "Anthony",
        email: "jAnthony@mail.com",
        grades: [78, 82, 79, 85]
    };

    let studentThree = {
        firstName: 'Jessie',
        lastName: 'Rockets',
        email: 'jessRockets@mail.com',
        grades: [87, 89, 91, 93]
    };

    let studentFour = {
        firstName: 'James',
        lastName: 'Rocket',
        email: 'jessie@mail.com',
        grades: [91, 89, 92, 93]
    };

    console.log(studentOne);
    console.log(studentTwo);
    console.log(studentThree);
    console.log(studentFour);*/


// Encapsulation
// Organizing data into objects improves readability and contextual clarity, allowing us to associate related data and behaviors within the same object. 
// It ensures that data is accessed and manipulated in a controlled manner, enhancing security, modularity, and maintainability of the codebase.

// Mini Activity #2


    /*function login(student) {
        console.log(`${student.email} has logged in.`);
    }

    function logout(student) {
        console.log(`${student.email} has logged out.`);
    }

    function listGrades(student) {
        console.log(`${student.firstName}'s grades:`);
        student.grades.forEach(grade => {
            console.log(grade);
        });
    }

    login(studentOne);
    listGrades(studentOne);
    logout(studentOne);

    login(studentTwo);
    listGrades(studentTwo);
    logout(studentTwo);

    login(studentThree);
    listGrades(studentThree);
    logout(studentThree);

    login(studentFour);
    listGrades(studentFour);
    logout(studentFour);*/


// Function vs Method
// Key Differences:
// 1. Association: Functions are standalone, while methods are associated with objects/classes.
// 2. Invocation: Functions are independent, while methods are invoked on specific instances of objects or classes.
// 3. Data Access: Methods have access to the data (attributes) of the object they belong to, while functions generally operate on their input parameters.

// Why would the functions above be better as methods?
// 1. Encapsulation: 
// 2. Contextual Clarity: 

// this keyword: allows methods to access and manipulate the object's properties without the need of explicit argument.


let studentOne = {
    firstName: "John",
    lastName: "Smith",
    email: "johnSmith@mail.com",
    grades: [89, 84, 78, 88],
    login: function() {
        console.log(`${this.email} has logged in.`);
    },
    logout: function() {
        console.log(`${this.email} has logged out.`);
    },
    listGrades: function() {
        console.log(`${this.firstName}'s grades:`);
        this.grades.forEach(grade => {
            console.log(grade);
        });
    },
    computeAve: function() {
        let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    },
    willPass: function() {
        return this.computeAve() >= 85;
    },
    willPassWithHonors: function() {
        let ave = this.computeAve();
        if (ave >= 90) {
            return true;
        } else if (ave >= 85) {
            return false;
        } else {
            return undefined;
        }
    }
};

let studentTwo = {
    firstName: "Joel",
    lastName: "Anthony",
    email: "jAnthony@mail.com",
    grades: [78, 82, 79, 85],
    login: function() {
        console.log(`${this.email} has logged in.`);
    },
    logout: function() {
        console.log(`${this.email} has logged out.`);
    },
    listGrades: function() {
        console.log(`${this.firstName}'s grades:`);
        this.grades.forEach(grade => {
            console.log(grade);
        });
    },
    computeAve: function() {
        let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    },
    willPass: function() {
        return this.computeAve() >= 85;
    },
    willPassWithHonors: function() {
        let ave = this.computeAve();
        if (ave >= 90) {
            return true;
        } else if (ave >= 85) {
            return false;
        } else {
            return undefined;
        }
    }
};

let studentThree = {
    firstName: 'Jessie',
    lastName: 'Rockets',
    email: 'jessRockets@mail.com',
    grades: [87, 89, 91, 93],
    login: function() {
        console.log(`${this.email} has logged in.`);
    },
    logout: function() {
        console.log(`${this.email} has logged out.`);
    },
    listGrades: function() {
        console.log(`${this.firstName}'s grades:`);
        this.grades.forEach(grade => {
            console.log(grade);
        });
    },
    computeAve: function() {
        let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    },
    willPass: function() {
        return this.computeAve() >= 85;
    },
    willPassWithHonors: function() {
        let ave = this.computeAve();
        if (ave >= 90) {
            return true;
        } else if (ave >= 85) {
            return false;
        } else {
            return undefined;
        }
    }
};

let studentFour = {
    firstName: 'James',
    lastName: 'Rocket',
    email: 'jessie@mail.com',
    grades: [91, 89, 92, 93],
    login: function() {
        console.log(`${this.email} has logged in.`);
    },
    logout: function() {
        console.log(`${this.email} has logged out.`);
    },
    listGrades: function() {
        console.log(`${this.firstName}'s grades:`);
        this.grades.forEach(grade => {
            console.log(grade);
        });
    },
    computeAve: function() {
        let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    },
    willPass: function() {
        return this.computeAve() >= 85;
    },
    willPassWithHonors: function() {
        let ave = this.computeAve();
        if (ave >= 90) {
            return true;
        } else if (ave >= 85) {
            return false;
        } else {
            return undefined;
        }
    }
};

let classOf1A = {
    students: [studentOne, studentTwo, studentThree, studentFour],
    countHonorStudents: function() {
        return this.students.filter(student => student.computeAve() > 90).length;
    },
    honorsPercentage: function() {
        return (this.countHonorStudents() / this.students.length) * 100;
    },
    retrieveHonorStudentInfo: function() {
        return this.students.filter(student => student.computeAve() >= 90)
            .map(student => {
                return {
                    email: student.email,
                    averageGrade: student.computeAve()
                };
            });
    },
    sortHonorStudentsByGradeDesc: function() {
        return this.retrieveHonorStudentInfo().sort((a, b) => b.averageGrade - a.averageGrade);
    }
};


console.log("studentOne.computeAve()");
console.log(studentOne.computeAve());
console.log("studentTwo.computeAve()");
console.log(studentTwo.computeAve());
console.log("studentThree.computeAve()");
console.log(studentThree.computeAve());
console.log("studentFour.computeAve()");
console.log(studentFour.computeAve());

console.log("studentOne.willPass()");
console.log(studentOne.willPass());
console.log("studentTwo.willPass()");
console.log(studentTwo.willPass());
console.log("studentThree.willPass()");
console.log(studentThree.willPass());
console.log("studentFour.willPass()");
console.log(studentFour.willPass());

console.log("studentOne.willPassWithHonors()");
console.log(studentOne.willPassWithHonors());
console.log("studentTwo.willPassWithHonors()");
console.log(studentTwo.willPassWithHonors());
console.log("studentThree.willPassWithHonors()");
console.log(studentThree.willPassWithHonors());
console.log("studentFour.willPassWithHonors()");
console.log(studentFour.willPassWithHonors());

console.log("classOf1A.students");
console.log(classOf1A.students);

console.log("classOf1A.countHonorStudents()");
console.log(classOf1A.countHonorStudents());

console.log("classOf1A.honorsPercentage()"); 
console.log(classOf1A.honorsPercentage()); 

console.log("classOf1A.retrieveHonorStudentInfo()"); 
console.log(classOf1A.retrieveHonorStudentInfo()); 

console.log("classOf1A.sortHonorStudentsByGradeDesc()"); 
console.log(classOf1A.sortHonorStudentsByGradeDesc()); 
