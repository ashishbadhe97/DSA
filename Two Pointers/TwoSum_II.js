/*

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]

*/

/*

Time Complexity: O(n ^ 2)
Space Complexity: O(1)

*/

var twoSum = function(numbers, target) {
    
    let ans = [];

    for(let i = 0 ; i < numbers.length - 1; i++){
        for(let j = i + 1 ; j < numbers.length ; j++){

            if(numbers[i] + numbers[j] === target){
                return [i+1,j+1];
            }

        }
    }

    return ans;
};

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/

var twoSumOp = function(numbers, target){
    let l = 0, r = numbers.length - 1;

    while(l < r){

        if((numbers[l] + numbers[r]) > target){
            r--;
        }else if((numbers[l] + numbers[r]) < target){
            l++;
        }else{
            return [l+1, r+1];
        }
    }

    return [-1,-1]
}

let numbers = [2,7,11,15], target = 9

console.log(twoSumOp(numbers, target));
