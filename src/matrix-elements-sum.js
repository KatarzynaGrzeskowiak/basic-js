const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let columnsCount = matrix[0].length;

  // Iterate over each column
  for (let col = 0; col < columnsCount; col++) {
    // Iterate over each row in the column
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col] === 0) {
        // If we encounter a 0, skip all values below it in this column
        break;
      }
      // Add the current value to the sum if it's not under a 0
      sum += matrix[row][col];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
