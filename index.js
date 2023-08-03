/*
Write an algo that takes an array of numbers as input and calculates the sum of those numbers

Define the time complexity of that algo and determine the lowest possible time complexity for this problem
*/

// O(n) time complexity (Linear)
function SumNumbers(numbers) {
  let sum = 0; // 1 operation
  for (const number of numbers) { // 1 operation
    sum += number; // numbers.length operations
  }
  console.log(sum); // 1 operation
}

SumNumbers([3, 5, 8, 22]);