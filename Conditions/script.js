//Problem 1: Check If a Number is Even or Odd
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEvenOrOdd(4)); // Output: Even
console.log(isEvenOrOdd(7)); // Output: Odd

//Problem 2: Determine the Grade Based on Marks

function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(85)); // Output: B
console.log(getGrade(92)); // Output: A

//: Check If a Year is a Leap Year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2021)); // Output: false

//Problem 4: Find the Largest of Three Numbers
function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(findLargest(10, 20, 15)); // Output: 20
console.log(findLargest(7, 5, 9)); // Output: 9

//Problem 5: Check If a Character is a Vowel or Consonant
function isVowelOrConsonant(char) {
    char = char.toLowerCase(); // Convert character to lowercase

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return "Vowel";
    } else if (char >= 'a' && char <= 'z') {
        return "Consonant";
    } else {
        return "Not a letter";
    }
}

console.log(isVowelOrConsonant('A')); // Output: Vowel
console.log(isVowelOrConsonant('b')); // Output: Consonant
