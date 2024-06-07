function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}   

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
    return 0;
  }

  let arithmeticMeanMarks = this.marks.reduce((acc, mark, idx, arr) => {
    acc += mark;
    if (idx === arr.length - 1) {
      return acc / arr.length;
    }
    return acc;
  }, 0);

  return arithmeticMeanMarks;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}