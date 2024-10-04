/*

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

*/


var productExceptSelf = function(nums) {
    
    let left = []
    left[0] = 1 
    let right = []
    right[nums.length - 1] = 1;

    let i = 1;
    let j = nums.length - 2;

    while(i < nums.length && j >= 0){
        left[i] = left[i - 1] * nums[i - 1];
        right[j] = right[j + 1] * nums[j + 1];
        i++;
        j--;
    }

    let ans = [];
    for(let i = 0 ; i < left.length ; i++){
        ans[i] = left[i] * right[i];
    }

    return ans;

};

let nums = [-1,1,0,-3,3]
console.log(productExceptSelf(nums));