const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let nameCount = {};
  let result = [];

  names.forEach(name => {
    if (!nameCount[name]) {
      // If the name is not in the count map, it's the first occurrence
      nameCount[name] = 1;
      result.push(name);
    } else {
      // If the name already exists, find the next available name with a suffix
      let newName = `${name}(${nameCount[name]})`;
      // Increment the count for the base name
      while (nameCount[newName]) {
        nameCount[name]++;
        newName = `${name}(${nameCount[name]})`;
      }
      nameCount[newName] = 1;  // Mark the new name as used
      result.push(newName);
    }
  });

  return result;
}

module.exports = {
  renameFiles
};
