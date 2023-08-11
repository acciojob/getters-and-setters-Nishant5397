class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}

	set age(newAge) {
		this.age = newAge;
	}
}

class Student extends Person {
	study() {
		console.log(`${this.getName()} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.getName()} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
