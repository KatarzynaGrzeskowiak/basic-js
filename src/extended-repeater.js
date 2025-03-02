const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Convert str and addition to string if they are not strings
  str = String(str);
  options.addition = options.addition !== undefined ? String(options.addition) : '';
  
  // Set defaults for missing properties
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  
  // Create the repeated addition string
  let addition = new Array(additionRepeatTimes).fill(options.addition).join(additionSeparator);
  
  // Create the final string to repeat (str + addition)
  let result = str + addition;

  // Create the final repeated string with separator
  return new Array(repeatTimes).fill(result).join(separator);
}

module.exports = {
  repeater
};
