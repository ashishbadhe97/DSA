/*

Input: nums = [2,7,11,15], target = 9
Output: [0,1]

TC: O(n) .... for map checking for element it takes O(1) time due to internal hash table implementation
SC: O(n)
*/

var twoSum = function (nums, target) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(target - nums[i])) {
      return [hashMap.get(target - nums[i]), i];
    }
    hashMap.set(nums[i], i);
  }

  return [-1, -1];
};

let nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));
