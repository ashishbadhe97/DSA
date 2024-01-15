
const searchNumber = (nums, target) =>{

    const pivotIndex = findPivotIndex(nums);

    console.log(pivotIndex)

    if(pivotIndex  === -1){
        return binarySearch(0, nums.length - 1, nums, target);
    }

    if(target >= nums[0]){
        return binarySearch(0, pivotIndex, nums, target);
    }

    return binarySearch(pivotIndex + 1, nums.length - 1, nums, target);

}

const binarySearch = (start, end, nums, target) => {

    while(start <= end){

        let mid = Math.trunc(start + (end - start) / 2);

        if(nums[mid] === target){
            if(nums[mid - 1] !== target){
                return mid;
            }
            end = mid - 1;
        }

        if(nums[mid] > target){
            end = mid - 1;
        }

        if(nums[mid] < target){
            start = mid + 1;
        }
    }

    return -1;

}

const findPivotIndex = (nums) => {

    let start = 0;
    let end = nums.length - 1;

    while(start <= end){

        let mid = Math.trunc(start + (end - start) / 2);

        if(nums[mid] > nums[mid + 1]){
            return mid;
        }else if(nums[mid - 1] > nums[mid]){
            return mid - 1;
        }else if(nums[start] > nums[mid]){
            end = mid - 1;
        }else if(nums[start] < nums[mid]){
            start = mid + 1;
        }else if(nums[start] === nums[mid]){
            if(nums[start] > nums[start + 1]){
                return start;
            }
            start++;
        }
    }

    return -1;
}


console.log(searchNumber([3,4,5,6,7,7,8,8,8,8,8,9,0,0,1,1,2,2,3], 9));
