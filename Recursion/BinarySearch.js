/**
 * 704. Binary Search (by Recursion)
 * 
 * https://leetcode.com/problems/binary-search/description/
 */


var search = function(nums, target) {
    return recursiveBinarySearch(0, nums.length - 1, nums, target);
};

const recursiveBinarySearch = (start, end, nums, target) => {

    if(start > end){
        return -1;
    }

    let mid = Math.trunc(start + (end - start) / 2);

    if(nums[mid] === target){
        return mid;
    }

    if(nums[mid] > target){
        return recursiveBinarySearch(start, mid - 1, nums, target);
    }else{
        return recursiveBinarySearch(mid + 1, end, nums, target);
    }
}

console.log(search([-1,0,3,5,9,12], 9))