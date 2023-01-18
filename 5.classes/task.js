class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        this.state = this.state * 1.5;
    }
    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
           this._state = value;   
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

class Library {
    constructor(name) {
        this.name = name;
        this.books = []; 
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            } 
        }
        return null;
    }

    giveBookByName(bookName) {
        let indexBook = this.books.findIndex(function(item) {
            return item.name === bookName;
        });

        let book = this.books[indexBook];
      
        if (indexBook !== -1) {
            this.books.splice(indexBook, 1);
        } else {
            return null; 
        }
          
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        } else if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        } this.marks[subject].push(mark);  
    }

    getAverageBySubject(subject) {
        let marksSum = 0;
        let marksSubject = this.marks[subject];
        
        if (!marksSubject) {
            return  marksSum;
        } else {
            return marksSum = marksSubject.reduce((a, b) => a + b, 0) / marksSubject.length; 
        }
    }   

    getAverage() {
        let namesSubject = Object.keys(this.marks);
        let sum = 0;

        if (namesSubject.length == 0) {
            return sum;
        }
    
       for (let subject of namesSubject) {
            sum += this.getAverageBySubject(subject);
        }
        return sum / namesSubject.length;

        /* Второй способ
        namesSubject.forEach(subject =>
            sum += this.getAverageBySubject(subject)
       ); 
       return sum / namesSubject.length;*/
    }
    
}