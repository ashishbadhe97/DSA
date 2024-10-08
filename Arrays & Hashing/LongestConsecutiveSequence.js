/*
Input: nums = [100,4,200,1,3,2]
Output: 4
*/

/*
TC: O(nlogn)
SC: O(1)
*/

var longestConsecutive = function (nums) {
  let maxLen = 0;
  let temp = 1;

  if (nums.length <= 1) {
    return nums.length;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i + 1] || nums[i] + 1 === nums[i + 1]) {
      temp++;
      maxLen = Math.max(maxLen, temp);
    } else if (nums[i] === nums[i + 1]) {
      maxLen = Math.max(maxLen, temp);
    } else {
      temp = 1;
    }
  }

  return maxLen;
};


/*
TC: O(n)
SC: O(n)
*/


var longestConsecutiveOp = function(nums) {

    if(nums.length <= 1){
        return nums.length;
    }

    let set = new Set([...nums]); // o(n)

    let maxLen = 1;

    for(let num of nums){ //o(n)

        let cnt = 1;
        let ele = num - 1;

        if(!set.has(ele)){
            ele = num + 1
            while(set.has(ele)){
                cnt++;
                ele = ele + 1;
            }
        }
        maxLen = Math.max(maxLen, cnt);
    }

    return maxLen;
};

let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutiveOp(nums));
