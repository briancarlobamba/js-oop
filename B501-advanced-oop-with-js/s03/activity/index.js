class RegularShape {
    constructor() {
        if (this.constructor === RegularShape) {
            throw new Error("Object cannot be created from an abstract class RegularShape");
        }
        if (this.getArea === undefined) {
            throw new Error("Class must implement getArea() method");
        }
        if (this.getPerimeter === undefined) {
            throw new Error("Class must implement getPerimeter() method");
        }
    }
}

class Square extends RegularShape {
    constructor(sidesLength) {
        super();
        this.sidesLength = sidesLength;
    }

    getArea() {
        return `Area of the square: ${this.sidesLength ** 2}`;
    }

    getPerimeter() {
        return `Perimeter of the square: ${this.sidesLength * 4}`;
    }
}

let square1 = new Square(5);
console.log(square1.getArea());
console.log(square1.getPerimeter());

class Food {
    constructor(name, price) {
        if (this.constructor === Food) {
            throw new Error("Object cannot be created from an abstract class Food");
        }
        this.name = name;
        this.price = price;
        if (this.getName === undefined) {
            throw new Error("Class must implement getName() method");
        }
    }
}

class Vegetable extends Food {
    constructor(name, price, variety) {
        super(name, price);
        this.variety = variety;
    }

    getName() {
        return `${this.name} is of ${this.variety} variety and is priced at ${this.price} pesos.`;
    }
}

let vegetable1 = new Vegetable("Carrot", 50, "Root");
console.log(vegetable1.getName()); 

class Equipment {
    constructor(equipmentType, model) {
        if (this.constructor === Equipment) {
            throw new Error("Object cannot be created from an abstract class Equipment");
        }
        this.equipmentType = equipmentType;
        this.model = model;
        if (this.printInfo === undefined) {
            throw new Error("Class must implement printInfo() method");
        }
    }
}

class Bulldozer extends Equipment {
    constructor(equipmentType, model, bladeType) {
        super(equipmentType, model);
        this.bladeType = bladeType;
    }

    printInfo() {
        return `Info: ${this.equipmentType}: The bulldozer ${this.model} has a ${this.bladeType} blade.`;
    }
}

let bulldozer1 = new Bulldozer("Bulldozer", "BDZ-001", "Straight");
console.log(bulldozer1.printInfo()); 


class TowerCrane extends Equipment {
    constructor(equipmentType, model, hookRadius, maxCapacity) {
        super(equipmentType, model);
        this.hookRadius = hookRadius;
        this.maxCapacity = maxCapacity;
    }

    printInfo() {
        return `Info: ${this.equipmentType}: The tower crane ${this.model} has ${this.hookRadius} cm hook radius and ${this.maxCapacity} kg max capacity.`;
    }
}

let towerCrane1 = new TowerCrane("TowerCrane", "TC-102", 100, 2000);
console.log(towerCrane1.printInfo()); 
