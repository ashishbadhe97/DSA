/*

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

*/

// TC: o(n) + o(n) + nlog(n) + o(k)

var topKFrequent = function(nums, k) {
    
    let map = new Map();

    for(let i = 0 ; i < nums.length ; i++){
        if(map.has(nums[i])){
            map.get(nums[i])[1]++;
        }else{
            map.set(nums[i], [nums[i], 1]);
        }
    }

    let arr = []
    
    for(let value of map.values()){
        arr.push(value);
    }

    arr = arr.sort((a,b) => a[1] - b[1]);

    let ans = [];

    while(k > 0){
        let ele = arr.pop()[0];
        ans.push(ele);
        k--;
    }

    return ans;
};

/*

Opmimised Solution

Uses a frequency Array for storing numbers which occurred that frequently

TC: O(n)
SC: O(n) + O(k)
*/

function topKFrequentOp(nums, k) {

    let map = new Map();

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }

    let freqArr = Array(nums.length);

    map.forEach((value, key, map) => {

        if(!freqArr[value]){
            freqArr[value] = [];
        }
        freqArr[value].push(key);
    })

    let res = [];

    for(let i = freqArr.length - 1 ; i >= 0 ; i--){

        if(freqArr[i]){
            res = res.concat(freqArr[i]);
        }

        if(res.length >= k){
            return res;
        }
    }

    return [];
}


let nums = [1,1,1,2,2,3], k = 2;

console.log(topKFrequentOp(nums, k));