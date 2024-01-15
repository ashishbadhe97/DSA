/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    

    const pivot = findPivotWithDuplicates(nums);

    console.log(pivot);

    if(pivot == -1){

        if(target === nums[0]){
            return true;
        }
        return false;
    }

    if(target === nums[0] || target === nums[nums.length - 1] || target === nums[pivot]){
        return true;
    }


    if(target > nums[0]){
        return binarySearch(0 , pivot - 1, nums, target);
    }

    if(target < nums[0]){
        return binarySearch(pivot + 1 , nums.length - 1, nums, target);
    }

    return false;

};

const binarySearch = (start, end, nums, target) => {

    while(start <= end){

        let mid = Math.trunc((start + (end - start) / 2));

        if(nums[mid] === target){
            return true;
        }else if(nums[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return false;
}

const findPivotWithDuplicates = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = start + (end - start) / 2;
        // 4 cases over here
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid-1;
        }

        // if elements at middle, start, end are equal then just skip the duplicates
        if (arr[mid] == arr[start] && arr[mid] == arr[end]) {
            // skip the duplicates
            // NOTE: what if these elements at start and end were the pivot??
            // check if start is pivot
            if (start < end && arr[start] > arr[start + 1]) {
                return start;
            }
            start++;

            // check whether end is pivot
            if (end > start && arr[end] < arr[end - 1]) {
                return end - 1;
            }
            end--;
        }
        // left side is sorted, so pivot should be in right
        else if(arr[start] < arr[mid] || (arr[start] == arr[mid] && arr[mid] > arr[end])) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

let nums = [1,3]
let target = 3;

const ans = search(nums,target);

console.log(ans);