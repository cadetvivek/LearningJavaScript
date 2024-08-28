//Problem 1: Print All Even Numbers from 1 to N

function printEvenNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEvenNumbers(10); // Output: 2 4 6 8 10

//Problem 2: Calculate the Sum of First N Natural Numbers
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNaturalNumbers(5)); // Output: 15 (1+2+3+4+5)

// Generate a Multiplication Table for a Given Number
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplicationTable(5);
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

//Print a Right-Angle Triangle Pattern with Asterisks
function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

printTriangle(5);
// Output:
// *
// **
// ***
// ****
// *****

//Problem 5: Find the Factorial of a Number

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(5)); // Output: 120 (5*4*3*2*1)
console.log(factorial(0)); // Output: 1 (by definition)
