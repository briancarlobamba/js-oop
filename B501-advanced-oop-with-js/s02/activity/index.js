// 1.

	class Equipment {
		constructor(equipmentType) {
			this.equipmentType = equipmentType;
		}

		printInfo() {
		return `Info: ${this.equipmentType}`;
		}
	}


// 2.

	class Bulldozer extends Equipment {
		constructor(equipmentType, model, bladeType) {
			super(equipmentType);
			this.model = model;
			this.bladeType = bladeType;
		}

		printInfo() {
			return `${super.printInfo()}\nThe bulldozer ${this.model} has a ${this.bladeType} blade`
		}
	}


// 3. 

	class TowerCrane extends Equipment {
		constructor(equipmentType, model, hookRadius, maxCapacity) {
			super(equipmentType);
			this.model = model;
			this.hookRadius = hookRadius;
			this.maxCapacity = maxCapacity;
		}
		printInfo() {
			return `${super.printInfo()}\nThe tower crane ${this.model} has ${this.hookRadius} cm hook radius and ${this.maxCapacity} kg max capacity`
		}
	}


// 4.

	class BackLoader extends Equipment {
		constructor(equipmentType, model, type, tippingLoad) {
			super(equipmentType);
			this.model = model;
			this.type = type;
			this.tippingLoad = tippingLoad;
		}
		printInfo() {
			return `${super.printInfo()}\nThe loader ${this.model} is a ${this.type} loader and has a tipping load of ${this.tippingLoad} lbs.`
		}
	}


// 5.

	class RegularShape {
		constructor(noSides, length) {
			this.noSides = noSides;
			this.length = length;
		}

		getPerimeter() {
			return "The perimeter is "
		}

		getArea() {
			return "The area is "
		}
	}


// 6.

	class Triangle extends RegularShape {

		getPerimeter() {
			return super.getPerimeter() + (this.noSides * this.length);
		}

		getArea() {
			return super.getArea() + ((3 ** 0.5) / 4) * (this.length ** 2);
		}
	}


// 7.

	class Square extends RegularShape {

		getPerimeter() {
			return super.getPerimeter() + (this.noSides * this.length);
		}

		getArea() {
			return super.getArea() + (this.length ** 2)
		}
	}

const bulldozer1 = new Bulldozer("bulldozer", "Brute", "Shovel");
console.log(bulldozer1.printInfo());

const towerCrane1 = new TowerCrane("tower crane", "Pelican", 100, 1500);
console.log(towerCrane1.printInfo());

const backLoader1 = new BackLoader("back loader", "Turtle", "hydraulic", 1500);
console.log(backLoader1.printInfo());

const triangle1 = new Triangle(3, 10);
console.log(triangle1.getPerimeter());
console.log(triangle1.getArea());

const square1 = new Square(4, 12);
console.log(square1.getPerimeter());
console.log(square1.getArea());

