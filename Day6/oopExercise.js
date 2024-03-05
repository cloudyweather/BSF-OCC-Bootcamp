class shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        throw new Error("Method not implemented.")
    }
}

class rectangle extends shape{
    displayFormula(){
        console.log("The area of the rectangle is the width multiplied by the height.");

    }
    calculateArea(){
        console.log(`The area of the reactangle is: ${this.width * this.height}.`);

    }
}

const shape1 = new rectangle(2,8);
shape1.displayFormula();
shape1.calculateArea();