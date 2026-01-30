/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // start from last digit
    for (let i = digits.length - 1; i >= 0; i--) {
        // if digit is less than 9, just add 1
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        }
        // if digit is 9, make it 0 and continue
        digits[i] = 0;
    }
    // if all digits were 9
    digits.unshift(1);
    return digits;
};
