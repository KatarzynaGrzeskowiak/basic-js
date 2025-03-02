const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;  // Start with a depth of 1, since the array itself counts as level 1.

    // Check each element in the array
    for (let i = 0; i < arr.length; i++) {
      // If the element is an array, calculate its depth recursively
      if (Array.isArray(arr[i])) {
        // Compare the depth of the current element and keep the maximum depth
        depth = Math.max(depth, 1 + this.calculateDepth(arr[i]));
      }
    }

    return depth;  // Return the calculated depth
  }
}

module.exports = {
  DepthCalculator
};
