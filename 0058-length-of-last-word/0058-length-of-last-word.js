/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    const words = s.split(' ')
    const lastWords = words[words.length-1]
    return lastWords.length
};
const s = "Hello World"
console.log(lengthOfLastWord(s))