const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  // Helper function to check if the character is a letter
  isLetter(char) {
    return char >= 'A' && char <= 'Z';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (this.isLetter(char)) {
        let messageCharCode = message[i].charCodeAt(0) - 65; // A=0, B=1, ..., Z=25
        let keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 65; // A=0, B=1, ..., Z=25

        let encryptedCharCode = (messageCharCode + keyCharCode) % 26 + 65; // Wrap around using modulo 26
        result += String.fromCharCode(encryptedCharCode);

        keyIndex++;
      } else {
        result += message[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let char = encryptedMessage[i];
      if (this.isLetter(char)) {
        let encryptedCharCode = encryptedMessage[i].charCodeAt(0) - 65; // A=0, B=1, ..., Z=25
        let keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 65; // A=0, B=1, ..., Z=25

        let decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26 + 65; // Wrap around using modulo 26
        result += String.fromCharCode(decryptedCharCode);

        keyIndex++;
      } else {
        result += encryptedMessage[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
