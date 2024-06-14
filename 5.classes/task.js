// Задача 1:
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача 2:
class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.some(book => book[type] === value) ? this.books.find(book => book[type] === value) : null;
  }

  giveBookByName(bookName) {
    let requestedBook = this.findBookBy("name", bookName);
    if (requestedBook === undefined) {
      return null;
    }

    this.books = this.books.filter(book => book.name !== bookName);
    return requestedBook;
  }  
}

// Задача 3:
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (this.marks.hasOwnProperty(subjectName) === false && (mark >= 2) && (mark <= 5)) {
      this.marks[subjectName] = [];
      this.marks[subjectName].push(mark);
    } else if (this.marks.hasOwnProperty(subjectName) === true && (mark >= 2) && (mark <= 5)) {
      this.marks[subjectName].push(mark);
    }
  }

  getAverageBySubject(subjectName) {
    let marksBySubject = this.marks[subjectName];
    if (this.marks.hasOwnProperty(subjectName) !== true) {
      return 0;
    }

    let averageMarkBySubject = marksBySubject.reduce((acc, mark, idx, arr) => acc + mark, 0);
    return averageMarkBySubject / marksBySubject.length;
  }

  getAverage() {
    let AllSubjects = Object.keys(this.marks);
    if (AllSubjects.length === 0) {
      return 0;
    }

    let arrAverageMarks = [];
    AllSubjects.reduce((acc, subject, idx, arr) => arrAverageMarks.push(this.getAverageBySubject(AllSubjects[acc])), 0);
    
    let sumAverageMarks = arrAverageMarks.reduce((acc, mark, idx, arr) => acc + mark, 0);
    return sumAverageMarks / AllSubjects.length;
  }
}