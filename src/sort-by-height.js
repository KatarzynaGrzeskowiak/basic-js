const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //Step 1: Collect all elements that are not -1
  const nonMinusOne = arr.filter(num => num !== -1);

  // Step 2: Sort the non -1 values
  nonMinusOne.sort((a, b) => a - b);

  // Step 3: Rebuild the array by placing sorted values and `-1` back in their original positions
  let index = 0;
  return arr.map(value => {
    if (value === -1) {
      return -1;  // Leave `-1` at the same position
    } else {
      return nonMinusOne[index++];  // Place sorted values at the non -1 positions
    }
  });
}

module.exports = {
  sortByHeight
};
