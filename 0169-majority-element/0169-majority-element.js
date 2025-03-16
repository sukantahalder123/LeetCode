/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums[0];
    let count = 1;
    for(let i = 1; i<nums.length; i++){
        if(nums[i] === n){
            count++
        }else{
            count--;
            if (count == 0){
                n = nums[i];
                count = 1
            }
        }
    }
    return n
};