/*
Write an algo that takes an array of numbers as input and calculates the sum of those numbers

Define the time complexity of that algo and determine the lowest possible time complexity for this problem
*/

// O(n) time complexity (Linear)
function SumNumbers(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  console.log(sum);
}

SumNumbers([3, 5, 8, 22]);