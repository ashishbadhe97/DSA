/*

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6


Time Complexity: O(n) + O(n) + O(n) = O(n);
Space Complexity: O(n) As we are using leftArr and rightArr

*/

const trap = (height) => {

    let maxleft = height[0];
    let leftArr = []
    leftArr[0] = 0;

    for(let i = 1 ; i < height.length ; i++){

        if(height[i] > maxleft){
            maxleft = height[i];
            leftArr[i] = 0;
        }else{
            leftArr[i] = maxleft
        }
    }

    let maxRight = height[height.length - 1];
    let rightArr = [];
    rightArr[height.length - 1] = 0;

    for(let i = height.length - 2 ; i >= 0 ; i--){

        if(height[i] > maxRight){
            maxRight = height[i];
            rightArr[i] = 0
        }else{
            rightArr[i] = maxRight;
        }
    }

    let sum = 0;
    for(let i = 0 ; i < height.length ; i++){

        let maxHeight = Math.min(leftArr[i], rightArr[i]);

        if(maxHeight > height[i]){
            sum = sum + (maxHeight - height[i]);
        }
    }

    return sum;
}

/*

TC: O(n)
SC: O(1)

*/

const trapOp = (height) => {

    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let totalWater = 0;

    while(left < right){
        if(leftMax < rightMax){
            left++;
            leftMax = Math.max(leftMax, height[left]);
            totalWater += leftMax - height[left];
        }else{
            right--;
            rightMax = Math.max(leftMax, height[right]);
            totalWater += rightMax - height[right];
        }
    }

    return totalWater;
}

let height = [4,2,3]
console.log(trapOp(height));