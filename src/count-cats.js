const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let flatMatrix = matrix.flat(Infinity);
  let count = 0
  flatMatrix.forEach(backyard=>{
    if(backyard==="^^"){
      count++
    }
  }
  )
  return count;
}

console.log(countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
]))

module.exports = {
  countCats
};
