var splitArray = function (nums, k) {
  const minSum = findMinSum(nums);
  const maxSum = nums.reduce((acc, currentNo) => {
    return acc + currentNo;
  }, 0);

  return findLargestMinSum(minSum, maxSum, nums, k);
};

const findLargestMinSum = (start, end, nums, k) => {

  while (start < end) {
    let mid = Math.trunc(start + (end - start) / 2);


    let sum = 0;
    let arrCount = 1;

    for(let i = 0 ; i < nums.length ; i++){

       if((sum + nums[i]) > mid){
            arrCount++;
            sum = nums[i];
       }else{
         sum += nums[i]
       }
    }

    if (arrCount <= k) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
};

const findMinSum = (nums) => {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));
