/*

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]




*/

// Brute Force

// Time Complexity:  o(n) * o(k);
// Space Compexity: O(n)


function findMax(s, e, nums) {
    let max = nums[s];

    for(let i = s + 1; i <= e ; i++){
        max = Math.max(max, nums[i]);
    }

    return max;
}

var maxSlidingWindow = (nums, k) => {

    let ans = [], l = 0, r = k - 1;

    while(r < nums.length){
        ans.push(findMax(l, r, nums));
        l++;
        r++;
    }

    return ans;
}

var maxSlidingWindowOp = (nums, k) => {

    let deque = [];
    let ans = [];

    for(let i = 0 ; i < nums.length ; i++){

        if(deque.length && i - deque[0] >= k){ 
            deque.shift();
        }

        while(deque.length && nums[i] >= nums[deque[deque.length - 1]]){
            deque.pop();
        }
        deque.push(i);

        if(i >= k - 1){
            ans.push(nums[deque[0]]);
        }
    }

    return ans;
}

let nums = [1], k = 1

console.log(maxSlidingWindowOp(nums, k));
