// 75. Sort Colors



var sortColors = function(nums) {
    
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;

    while(mid <= end){

        if(nums[mid] === 2){
            swap(mid, end, nums);
            end--;
        }else if(nums[mid] === 1){
            mid++;
        }else{
            swap(mid, start, nums);
            mid++;
            start++;
        }
    }

    return nums;
};

const swap = (indx1, indx2, nums) => {
    const temp = nums[indx1];
    nums[indx1] = nums[indx2];
    nums[indx2] = temp;
}

nums = [2,0,2,1,1,0];

console.log(sortColors(nums));