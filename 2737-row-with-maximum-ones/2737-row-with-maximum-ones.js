/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let maxOnes = 0;
    let rowIndex = -0;

    for (let i = 0; i < mat.length; i++) {
        let currentOnes = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                currentOnes++;
            }
        }
        if (currentOnes > maxOnes) {
            maxOnes = currentOnes;
            rowIndex = i;
        }
    }

    return [rowIndex, maxOnes];
};

const mat = [
    [0, 1],
    [1, 0]
];
const result = rowAndMaximumOnes(mat);
console.log(result);
