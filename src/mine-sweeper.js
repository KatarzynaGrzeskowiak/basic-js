const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Directions to check for neighbors (8 directions)
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],  // Top-left, top, top-right
    [0, -1],         [0, 1],     // Left, right
    [1, -1], [1, 0], [1, 1]      // Bottom-left, bottom, bottom-right
  ];

  // Initialize the result matrix with zeros
  for (let i = 0; i < rows; i++) {
    result[i] = Array(cols).fill(0);
  }

  // Loop through each cell in the original matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === true) {
        // If the cell is a mine, increment the neighboring cells
        for (let [dx, dy] of directions) {
          const newRow = i + dx;
          const newCol = j + dy;

          // Check if the neighbor is within bounds
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            result[newRow][newCol]++;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
