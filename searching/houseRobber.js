// 198. House Robber  (Dynamic programming)

var rob = function(nums) {

    let dp = [];
    dp[0] = nums[0];
    
    if(nums.length >= 2 && nums[1] > nums[0]){
        dp[1] = nums[1]
    }else{
        dp[1] = dp[0];
    }

    for(let i = 2 ; i < nums.length ; i++){

        let n1 = dp[i - 1];
        let n2 = dp[i - 2];

        dp.push(Math.max((n2 + nums[i]), n1));
    }

    return dp[dp.length - 1];
};

console.log(rob([1,2]));