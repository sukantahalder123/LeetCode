/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const charMap = new Map();
    for (let i = 0; i < chars.length; i++) {
        charMap.set(chars[i], (charMap.get(chars[i]) || 0) + 1);
    }
    let totalLength = 0;
    for (let word of words) {
        let wordMap = new Map(charMap); 
        let canForm = true;

        for (let char of word) {
            if (!wordMap.has(char) || wordMap.get(char) === 0) {
                canForm = false;
                break;
            }
            wordMap.set(char, wordMap.get(char) - 1);
        }
        if (canForm) {
            totalLength += word.length;
        }
    }

    return totalLength;
};

// Example usage:
const words = ["cat", "bt", "hat", "tree"];
const chars = "atach";
console.log(countCharacters(words, chars));
