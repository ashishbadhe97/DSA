/*

Input: nums = [1,3,4,2,2]
Output: 2

Time Complexity: O(n)
Space Complexity: O(1)
*/


var findDuplicate = (nums) => {

    let slow = 0;
    let fast = 0;

    do{
        slow = nums[slow];
        fast = nums[nums[fast]];
    }while(slow != fast);

    fast = 0;

    while(slow != fast){
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;

}

let nums = [1,3,4,2,2];
console.log(findDuplicate(nums));