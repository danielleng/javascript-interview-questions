// ============== Chapter 4 ================

//===========================
// 1. What is a “JavaScript closure”; when would you use one ?
console.log("1. What is a “JavaScript closure”; when would you use one ?");
//===========================

// A Javascript closure is a function and a environment in which variables can be accessed. This environment is kept alive even after the function it was created in finishes executing. 

// The function that closes over (function that is returned from its enclosing function) has access to its parent function's environment, and thus has
// access to variables declared in the parent function. 

// Closures are useful because they allow us to declare private variables and methods to simulate class-like behaviour, or to improve code quality. 

// Additionally, closures also allow us to leverage Javascript's functions being first-class Objects. 
// By returning functions, we don't have to store app state in a global variable. We could past functions around and only call the function when it needs to be called. The function will still have access to state data without needing a global variable. 
// A good example of this is event handlers.


//===========================
// 2. What happens when the code below gets executed?
console.log("2. What happens when the code below gets executed?");
//===========================

// window.onload = function() {
//     var node = null, i = 0;
//     for (i = 0; i < 10; i++) {
//         node = document.createElement('a');
//         node.innerHTML = 'Click' + i;
//         node.onclick = function() {alert(i);};
//         document.body.appendChild(node);
//     }
// };

// onload = waits for everything including images to finish loading.
// $('document').ready() waits for DOM to finish loading.
    // Jquery's ready event emulates DOMContentLoaded in some browsers that do not have such functionality.

// Wait for everything to load, including images.
// Creates 10 link elements.
// Sets the link element's text to Click (i)
// Adds a listener to each button to alert 10 when clicked.
// Adds the 10 link elements to the document body.

// Improvements that can be made:
    // Use createTextNode instead of innerHTML. 
        // innerHTML does not escape HTML, while createTextNode does. 
    // Use DocumentFragment to insert the links first, before appending to body.


//===========================
// 3. Fix the previous question to ensure each link alerts its correct number.
console.log("3. Fix the previous question to ensure each link alerts its correct number.");
//===========================

// Using let keyword, each loop block maintains its value.
// window.onload = function() {
//     var node = null, i = 0;
//     for (let i = 0; i < 10; i++) {
//         node = document.createElement('a');
//         node.innerHTML = 'Click' + i;
//         node.onclick = function() {alert(i);};
//         document.body.appendChild(node);
//     }
// };

// Using closure in an IIFE
// window.onload = function() {
//     var node = null;
//     for (var i = 0; i < 10; i++) {
//         (function(index) {
//             node = document.createElement('a');
//             node.innerHTML = 'Click' + i;
//             node.onclick = function() {alert(index);};
//             document.body.appendChild(node);
//         })(i);
//     }
// };

// Using Object properties
// function alerting() {
//     alert(this.myValue);
// }
//
// window.onload = function() {
//     var node = null, i = 0, docFragment = null;
//     var text = null;
//     docFragment = document.createDocumentFragment();
//     for (let i = 0; i < 10; i++) {
//         node = document.createElement('a');
//         text = document.createTextNode("Click" + i);
//         node.appendChild(text);
//         node.myValue = i;
//         node.onclick = alerting;
//         docFragment.append(node);
//     }

//     document.body.appendChild(docFragment);
// };


//===========================
// 4. What does the following code do ? How can you improve it ?
console.log("4. What does the following code do ? How can you improve it ?");
//===========================

function bindArguments(context, delegate) {
    var boundArgs = arguments;
    return function() {
        var args = [], i;
        for(i=2; i < boundArgs.length; i++) {
            args.push(boundArgs[i]);
        }
        for(i=0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        return delegate.apply(context, args);
    };
}
function calculate(a, x, b, c) {return (a*x + b / c) * this.factor; }
                        // context,   delegate,  arguments
var bound = bindArguments({factor:4}, calculate, 10);
res = bound(1, 30, 60);
alert(res);

// Improved bind
function bindArgumentsImproved(context, delegate) {
    return delegate.bind(context, Array.prototype.slice.call(arguments).splice(2));
}


//===========================
// 5. A typical use of JavaScript closures is to create “so called” ‘private members’.
console.log("5. A typical use of JavaScript closures is to create “so called” ‘private members’.");
//===========================
function IAmHuman() {
    // private
    let name = "Dave";
    
    function getName() {
        return name;
    }
    
    return {
        // public
        age: 15,
        getName: getName
    }
}


//===========================
// 6. Given the following mapping implement Keys.isEnter, Keys.isTab, Keys.isShift, and Keys.isLeftArrow functions
console.log("6. Given the following mapping implement Keys.isEnter, Keys.isTab, Keys.isShift, and Keys.isLeftArrow functions");
//===========================
var Keys = {
    Enter: 13,
    Shift: 16,
    Tab: 9,
    LeftArrow: 37
};
for (let key in Keys) {
    if (Keys.hasOwnProperty(key)) {
        Keys['is' + key.toString()] = function(e) {
            return e === Keys[key];
        }
    }
}


//===========================
// 6. Given the following code snippet create a “Factory Method” that creates objects, given different names and professions.
console.log("6. Given the following code snippet create a “Factory Method” that creates objects, given different names and professions.");
//===========================
function factoryMethod(name, profession) {
    var message = "I'm " + name + ", and I am a " + profession + "!";
    
    return {
        name: name,
        profession: profession,
        
        shout: function() {alert(message);},
        
        shoutAsync: (function(mes) {
            return function() { setTimeout(function() {alert(mes);}, 1000); }
        })(message),
        
        shoutAsync2: function() {
            setTimeout( function() { alert(mes); }, 1000 );
        }
    };
}




