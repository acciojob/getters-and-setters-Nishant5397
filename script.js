class Person {
	name = "";
	age = "";
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	get getter() {
		return this.name;
	}

	set setter(newAge) {
		this.age = newAge;
	}
}

class Student extends Person {
	study() {
		console.log(`${this.getter()} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.getter()} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
