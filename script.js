`use strict`;

// 1.Write a function that checks if two strings are anagrams of each other (contain the same characters in a different order).

console.log(`Problem No. : 1`);
function areAnagrams(str1, str2) {
  str1 = str1.replace(/[^a-z]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-z]/g, "").toLowerCase();
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2));
console.log(`<------------------------------>`);


// 2. Given an array containing numbers from 1 to N with one number missing, write a function to find the missing number.

console.log(`Problem No. : 2`);
function findMissingNumber(arr) {
  const N = arr.length + 1;
  const expectedSum = (N * (N + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

const arr = [1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(arr);
console.log(missingNumber);
console.log(`<------------------------------>`);


// 3. Write a function to find common elements between two arrays.

console.log(`Problem No. : 3`);
function findCommonElements(arr1, arr2) {
  const common = [];
  for (const element of arr1) {
    if (arr2.includes(element)) {
      common.push(element);
    }
  }
  return common;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements);
console.log(`<------------------------------>`);


// 4. Write a function to implement the binary search algorithm to find an element in a sorted array.

console.log(`Problem No. : 4`);
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const index = binarySearch(sortedArray, target);
console.log(index);
console.log(`<------------------------------>`);


// 5. Write a function to find missing elements in a given range within an array.

console.log(`Problem No. : 5`);
function findMissingElements(arr, rangeStart, rangeEnd) {
  const missingElements = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (!arr.includes(i)) {
      missingElements.push(i);
    }
  }
  return missingElements;
}
const arrOne = [1, 3, 4, 7, 9];
const rangeStart = 1;
const rangeEnd = 10;
const missingElements = findMissingElements(arrOne, rangeStart, rangeEnd);
console.log(missingElements);
console.log(`<------------------------------>`);


// 6. Write a function to validate if the parentheses in an expression are balanced.

console.log(`Problem No. : 6`);
function validateParentheses(expression) {
  const stack = [];
  const parentheses = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char in parentheses) {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      const top = stack.pop();
      if (parentheses[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
const expression1 = "((a + b) - (c * d))";
const expression2 = "(a + b) - (c * d))";
console.log(validateParentheses(expression1));
console.log(validateParentheses(expression2));
console.log(`<------------------------------>`);


// 7. Write a function to perform basic string compression using the counts of repeated characters.

console.log(`Problem No. : 7`);
function compressString(inputString) {
  if (inputString.length === 0) {
    return inputString;
  }
  let compressed = "";
  let currentChar = inputString[0];
  let count = 1;
  for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === currentChar) {
      count++;
    } else {
      compressed += currentChar + count;
      currentChar = inputString[i];
      count = 1;
    }
  }
  compressed += currentChar + count;
  return compressed.length < inputString.length ? compressed : inputString;
}
const inputString = "aabcccccaaa";
const compressedString = compressString(inputString);
console.log(compressedString);
console.log(`<------------------------------>`);


// 8. Write a function to reverse a given integer.

console.log(`Problem No. : 8`);
function reverseNumber(number) {
  let numStr = number.toString();
  const isNegative = numStr[0] === "-";
  if (isNegative) {
    numStr = numStr.slice(1);
  }
  const reversedStr = numStr.split("").reverse().join("");
  const reversedNum = isNegative
    ? -parseInt(reversedStr)
    : parseInt(reversedStr);
  return reversedNum;
}
const number1 = 12345;
const number2 = -9876;
console.log(reverseNumber(number1));
console.log(reverseNumber(number2));
console.log(`<------------------------------>`);


// 9. Write a function to determine if a given text matches a pattern containing regular expressions.

console.log(`Problem No. : 9`);

console.log(`<------------------------------>`);


// 10. Write a function that finds the length of the longest increasing subsequence of a given array of integers.

console.log(`Problem No. : 10`);

console.log(`<------------------------------>`);