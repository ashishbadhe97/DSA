/*

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Time Complexity: O(n)
Space Complexity: O(1)

*/

let maxArea = (nums) => {
  let maxArea = 0;

  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    let wid = r - l;

    let ht = Math.min(nums[l], nums[r]);

    maxArea = Math.max(wid * ht, maxArea);

    if (nums[l] > nums[r]) {
      r -= 1;
    } else {
      l += 1;
    }
  }

  return maxArea;
};

let height = [1,1];
console.log(maxArea(height));