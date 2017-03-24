// ============== Chapter 3 ================

//===========================
// 1. How do you declare constants and enums in JavaScript?
//===========================

// Declare constant
// In ES6, const creates variables that are NOT immutable, but cant re-assign or re-declare.
const MAX_LIVES = 15;

// Declare enum
let heroA = {
    name: 'Andy',
    type: 'Magician',
    ability: 'Space Time Continuum'
};

// Enumerating through objects
function enumerateMe(obj) {
    for (let key in obj) {  // Also enumerates the proto chain
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

// Create non-enumerable property using defineProperty
Object.defineProperty(heroA, "level", { enumerable: false, value: 25 });
enumerateMe(heroA);


//===========================
// 2. What are the different ways you can define "classes" in JS ?
//===========================
// Classes imply a feature of a programming language from which Objects can be created from.
// JS does not have classes. But you can emulate class-like behaviour such as inheritance.

// Constructor function
let Car = function (engine, seat, wheelSize) {
    let drive = function() {
        console.log("Driving the car now with my epic " + engine + "!");
    };
    
    let getWheelSize = function() {
        console.log("My wheel size is: " + wheelSize);
    };
    
    let setWheelSize = function() {};
    
    return {
        drive: drive,
        getWheelSize: getWheelSize,
        setWheelSize: setWheelSize
    }
};

let mercedezC200 = new Car("v12", 4, 18.75);
mercedezC200.drive();  // Driving the car now with my epic _!
mercedezC200.getWheelSize(); // My wheel size is: _

// Using ES6's Class Syntax
class OtherCar {
    constructor(type, power) {
        this.type = type;
        this.power = power;
    }
}
class MuscleCar extends OtherCar {
    get horsepower() {
        return this.calculateHorsePower();
    }
    
    calculateHorsePower() {
        return console.log(this.power * 1000);
    }

    // Static methods can be called without instantiating the class.
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}
let mustang = new MuscleCar("American", "4000");
mustang.horsepower;

// Using object.create to create objects
let adam = Object.create(Object.prototype);
adam.apple = true;
enumerateMe(adam);

//===========================
// How to make private variables and methods ?
//===========================
let SecretAgent = function(_name, _age, _weapon) {
    let weapon = '';    // private
    
    if (_weapon === 'gun') {
        weapon = 'rifle';
    } else {
        weapon = 'fists';
    }
    
    function getWeapon() {
        return weapon;  // public accessor
    }
    
    return {        // pointers for closure variables/functions
        name: _name,
        age: _age,
        getWeapon: getWeapon
    }
};

let alex = new SecretAgent('Alex', 27, 'Sword');
console.log(alex.weapon);
console.log(alex.getWeapon());



// ============== Chapter 4 ================
