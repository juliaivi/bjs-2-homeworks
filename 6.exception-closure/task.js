function parseCount(value) {
    let parsing = Number.parseFloat(value);
    if (isNaN(parsing)) {
        throw new Error("Невалидное значение");
    } return parsing;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
       
        if ( (a + b) < c || (b + c) < a || (c + a) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    
    get perimeter() {
        return this.a + this.b + this.c;
    }
    
    get area() {
        let p = this.perimeter / 2 ;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return new class Errors {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
            
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
