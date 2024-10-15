/*

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]


Time Complexity: O(n)
Space Complexity: O(n)

*/

function dailyTemperatures(temperatures) {

    let stack = [];
    let ans = Array(temperatures.length).fill(0);

    for(let i = temperatures.length - 1 ; i >= 0 ; i--){

        while(stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]){
            stack.pop();
        }

        if(!stack.length){
            ans[i] = 0;
        }else{
            ans[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return ans;
}

let temperatures = [30,60,90];
console.log(dailyTemperatures(temperatures));