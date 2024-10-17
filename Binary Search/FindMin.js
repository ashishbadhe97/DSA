/*

Input: nums = [3,4,5,1,2]
Output: 1

TC: O(logn)
SC: O(1)
*/

var findMin = function(nums) {

    if(nums[0] < nums[nums.length - 1]) return nums[0];


    let s = 0, e = nums.length - 1;

    while(s <= e){

        let mid = Math.trunc(s + (e - s) / 2);

        if(nums[mid] > nums[mid + 1]) return nums[mid + 1];

        if(nums[mid] < nums[mid - 1]) return nums[mid];

        if(nums[mid] > nums[s]) s = mid + 1;

        if(nums[mid] < nums[s])  e = mid - 1;
    }

    return -1;
}

let nums = [11,13,15,17]
console.log(findMin(nums));