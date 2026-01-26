/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let first = nums[i]; 
        let sec = target - first;
        
        if (map.has(sec)) {
            return [map.get(sec), i]; 
        }
        map.set(first, i); 
    };
}; 
