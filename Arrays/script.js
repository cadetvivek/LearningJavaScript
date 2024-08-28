// Problem 1: Find the Maximum Value in an Array

function findMax(arr) {
    if (arr.length === 0) return null; // Check if the array is empty

    let max = arr[0]; // Initialize max with the first element of the array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max;
}

console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([])); // Output: null

//////////////////////////////////////////////////

//Problem 2: Reverse an Array

function reverseArray(arr) {
    let reversed = []; // Create a new empty array for the reversed elements

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); // Push elements from the end of the input array
    }

    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']

//////////////////////////////////////////////////
//Problem 3: Remove Duplicates from an Array


function removeDuplicates(arr) {
    let unique = []; // Create an empty array for unique elements

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]); // Add element if it's not already in the unique array
        }
    }

    return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['apple', 'orange', 'apple', 'banana'])); // Output: ['apple', 'orange', 'banana']

///////////////////////////////////////////////////

//Problem 4: Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let merged = []; // Create an empty array for the merged result
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from both arrays (if any)
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
////////////////////////////////////////////////////

//Problem 5: Find the Second Largest Number in an Array

function findSecondLargest(arr) {
    if (arr.length < 2) return null; // Check if there are at least two elements

    let max = -Infinity; // Initialize max with the smallest possible value
    let secondMax = -Infinity; // Initialize secondMax with the smallest possible value

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max; // Update secondMax before updating max
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i]; // Update secondMax if it's not the same as max
        }
    }

    return secondMax;
}

console.log(findSecondLargest([10, 5, 8, 12, 7])); // Output: 10
console.log(findSecondLargest([1])); // Output: null
