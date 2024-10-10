/*

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

*/

/*
Brute Force Approach

Time Complexity: O(n ^ 3)
Space Complexity: O(n ^ 2) since in ans each pair stores 2 elements and for worst case all triplets would be stored.
*/

var threeSum = function (nums) {
  let ans = [];
  let set = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    // O(n)
    for (let j = i + 1; j < nums.length - 1; j++) {
      // O(n)
      for (let k = j + 1; k < nums.length; k++) {
        // O(n)
        if (nums[i] + nums[j] + nums[k] === 0) {
          let item = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).join();

          if (!set.has(item)) {
            ans.push([nums[i], nums[j], nums[k]]);
          }

          set.add(item);
        }
      }
    }
  }
  return ans;
};

/*
Optimized Approach 1 with set

Time Complexity: O(n ^ 2) + nlogn
Space Complexity: O(n ^ 2) since in ans each pair stores 2 elements and for worst case all triplets would be stored.
*/

let threeSumOp1 = function (nums) {
  let ans = [];
  let setAns = new Set();
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let setNum = new Set();
    let target = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      let remNum = (target + nums[j]) !== 0 ? -(target + nums[j]) : 0;

      if (setNum.has(remNum)) {
        let uniStr = `${target}, ${nums[j]}, ${remNum}`;

        if (!setAns.has(uniStr)) {
          ans.push([target, nums[j], remNum]);
        }

        setAns.add(uniStr);
      }

      setNum.add(nums[j]);
    }
  }

  return ans;
};

/*
Optimized Approach 2 without any hashing

Time Complexity: O(n ^ 2) + nlogn
Space Complexity: O(1)
*/

let threeSumOp2 = function(nums) {

    let ans = [];

    nums = nums.sort((a,b) => a - b)

    for(let i = 0 ; i < nums.length - 2 ; i++){  // O(n)

        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }

        let l = i + 1, r = nums.length - 1;

        while(l < r){    // O(n)
            let threeSum = nums[i] + nums[l] + nums[r];

            if(threeSum > 0) r -= 1;
            else if (threeSum < 0) l += 1;
            else {
                ans.push([nums[i], nums[l], nums[r]]);
                l += 1;
                while(nums[l] === nums[l - 1] && l < r){
                    l += 1;
                }
            }
        }
    }

    return ans;
}

let nums = [-1,0,1,2,-1,-4]
console.log(threeSumOp2(nums));
