const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let maxNum = -Infinity;   // Initialize a variable to track the max number

  // Loop through each character (digit) in the string
  for (let i = 0; i < str.length; i++) {
    // Remove the i-th digit and form the new number
    const newNum = parseInt(str.slice(0, i) + str.slice(i + 1));
    maxNum = Math.max(maxNum, newNum);  // Update maxNum if the new number is larger
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
