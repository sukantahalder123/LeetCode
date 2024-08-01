/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;

    for (let i = 0; i < details.length; i++) {
        // Extract the age part from the string
        let age = parseInt(details[i].slice(11, 13), 10);

        if (age > 60) {
            count++;
        }
    }

    return count;
};

// Example usage:
const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];
console.log(countSeniors(details));
