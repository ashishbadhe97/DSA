/*

Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]

Output: 3

TC: O(n + logn + n) = nlogn
SC: O(n)

*/

var carFleet = function (target, position, speed) {
  let sortedArr = [];

  for (let i = 0; i < position.length; i++) {
    let time = (target - position[i]) / speed[i];
    sortedArr.push([position[i], time]);
  }

  sortedArr.sort((a, b) => a[0] - b[0]);

  let stack = [];

  for (let j = sortedArr.length - 1; j >= 0; j--) {
    if (!stack.length || sortedArr[j][1] > stack[stack.length - 1][1]) {
      stack.push(sortedArr[j]);
    }
  }

  return stack.length;
};

let target = 10;
let position = [6, 8];
let speed = [3, 2];
console.log(carFleet(target, position, speed));
