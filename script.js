// Define the base class Person
class Person {
	constructor(name, age) {
		this.name = name; // Initialize the name property
		this.age = age; // Initialize the age property
	}

	getName() {
		return this.name; // Getter for the name property
	}

	setAge(age) {
		this.age = age; // Setter for the age property
	}
}

// Define the subclass Student that extends Person
class Student extends Person {
	study() {
		console.log(`${this.getName()} is studying.`); // Study method for Student
	}
}

// Define the subclass Teacher that extends Person
class Teacher extends Person {
	teach() {
		console.log(`${this.getName()} is teaching.`); // Teach method for Teacher
	}
}

// Create instances of Person, Student, and Teacher
const person = new Person("John", 30);
const student = new Student("Alice", 22);
const teacher = new Teacher("Professor Smith", 45);
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
