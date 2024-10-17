/*

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

TC: O(logn)
SC: O(1)
*/

function binarySearch(nums, target) {

    let s = 0, e = nums.length - 1;

    while(s <= e){

        let mid = Math.trunc(s + (e - s) / 2);

        if(nums[mid] === target) return mid;

        if(nums[mid] > target) e = mid - 1;

        if(nums[mid] < target) s = mid + 1;
    }

    return -1;
}

let nums = [-1,0,3,5,9,12], target = 2
console.log(binarySearch(nums, target));