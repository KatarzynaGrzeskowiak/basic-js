const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // Calculate minimum number of turns required to solve the puzzle
  const turns = Math.pow(2, disksNumber) - 1;

  // Calculate the number of seconds to complete the puzzle
  const seconds = Math.floor(turns / (turnsSpeed / 3600));

  // Return the result as an object
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
