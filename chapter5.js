// ============== Chapter 5 ================
// Patterns of Javascript Architecture
//==========================================


// CPS - Continuation Passing Style
//===========================
// 1. Write an identity function, using continuation-passing style.
console.log("1. Write an identity function, using continuation-passing style.");
//===========================
// function that always returns the same value that was used as its argument. In equations, the function is given by f(x) = x.
function identityFunc(arg, delegate) {
    delegate(arg);
}

//===========================
// 2. Write a factorial function in JavaScript, using continuation-passing style.
console.log("2. Write a factorial function in JavaScript, using continuation-passing style.");
//===========================

function factorial(num, accum) {
    // 5 * 4 * 3 * 2 * 1 = 5!
    
}


// Bonus Questions
// Write a factorial function.
function normalFactorial(number) {
    let x = 1;
    for (var i = number; i > 0; i--) {
        x *= i;
    }
    return x;
}

// Write a factorial function that utilizes recursion.
function factorialRecurse(number) {
    if (number <= 0) {
        return (number * factorialRecurse(number - 1));
    } else {
        return number;
    }
}

// Write a function that calculates the nth number of a Fibonacci sequence.
// Memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
function fibonacci(num, memo) {
    memo = memo || {};
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
    
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

// Write a function that does multiplication by addition only.
function multiplyByAddition(num1, num2) {
    
}