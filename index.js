// ============== Chapter 3 ================
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
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

// Create non-enumerable property using defineProperty
Object.defineProperty(heroA, "level", { enumerable: false, value: 25 });
enumerateMe(heroA);


// What are the different ways you can define "classes" in JS
// Classes imply a feature of a programming language from which Objects can be created from.
// JS does not have classes. But you can emulate class-like behaviour such as inheritance.

// Module Pattern
let Car = function (engine, seat, wheelSize) {
    let drive = function() {
        console.log("Driving the car now!");
        console.log("My " + engine + " is so powerful!");
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
mercedezC200.drive();
mercedezC200.getWheelSize();


// Class Syntax


class MuscleCar extends Car {
    constructor(type, power) {
        this.type = type;
        this.power = power;
    }
    
    
}

let mustang = new MuscleCar("American", "4000");

// ============== Chapter 4 ================
