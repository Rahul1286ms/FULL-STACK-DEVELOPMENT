
//ES6 Class Syntax
class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    //Is method ke output ke liye objname.getPrice() karna padta
    getPrice() {
        return this.price;
    }

    //Getter Method, is method ka output lene ke liye objname.getName kar hota hai
    //objname.getName() nhi karna hota  
    get getName() {
        return this.name;
    }

    //Setter Method is ko bhi call karne ke liye objname.setPrice = 10000000;
    set setPrice(newPrice) {
        this.price = newPrice;
    }
}

class RacingCar extends Car {
    constructor(name, price, maxSpeed, color) {
        //Calling parent class constructor
        super(name, price);
        this.maxSpeed = maxSpeed;
        this.color = color;
    }

    get getColor() {
        return this.color;
    }

    getMaxSpeed() {
        return this.getMaxSpeed;
    }

    set setMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }
}

const c1 = new Car("BMW", 9999999);
const c2 = new Car("Audi", 10000000);

const r1 = new RacingCar("Ferrari", 10000, 500, "Red");