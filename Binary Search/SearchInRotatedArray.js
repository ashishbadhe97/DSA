/*

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4


Time Complexity: O(nlogn)
Space Complexity: O(1)

*/

var search = function (nums, target) {

    if(nums[0] <= nums[nums.length - 1]){
        return binarySearch(0, nums.length - 1, nums, target);
    }
    
    let pivot = findPivot(nums);

    if(target >= nums[0]) {
        return binarySearch(0, pivot, nums, target);
    }

    return binarySearch(pivot + 1, nums.length - 1, nums, target);
}

function binarySearch(s, e, nums, target) {

    while(s <= e){
        let m = Math.trunc(s + (e - s) / 2);

        if(nums[m] === target) return m;
        if(nums[m] > target) e = m - 1;
        if(nums[m] < target) s = m + 1;
    }

    return -1;
}

function findPivot(nums) {

    let start = 0, end = nums.length - 1;

    while(start <= end){

        let mid = Math.trunc(start + (end - start) / 2);

        if(nums[mid] > nums[mid + 1]) return mid;

        if(nums[mid] < nums[mid - 1]) return mid - 1;

        if(nums[mid] > nums[start]) {
            start = mid + 1;
        }else if(nums[mid] < nums[start]){
            end = mid - 1;
        }
    }

    return -1;
}

let nums = [3,4,5,6,1,2], target = 2
console.log(search(nums, target));