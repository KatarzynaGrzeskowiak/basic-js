const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  console.log(str.split(""))
  let codeStr =[];
  let arr = str.split("")
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === arr[i + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        codeStr.push(counter);
      }
      codeStr.push(arr[i]);
      counter = 1;
    }
  }
  return codeStr.join("");
}

encodeLine('aaaatttt');

module.exports = {
  encodeLine
};
