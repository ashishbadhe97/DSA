/*

Input: s = "A man, a plan, a canal: Panama"
Output: true

*/

/*

Time Complexity: O(n) + O(n)
Space Complexity: O(n) beacuse we are creating a new string
*/

var isPalindrome = function (s) {
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] >= "a" && s[i] <= "z") ||
      (s[i] >= "A" && s[i] <= "Z") ||
      (s[i] >= "0" && s[i] <= "9")
    ) {
      newStr = newStr + s[i].toLowerCase();
    }
  }

  let left = 0,
    right = newStr.length - 1;
  while (left <= right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};


/*

Time Complexity: O(n)
Space Complexity: O(1)
*/


var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {

    while(left < right && !checkAlphaNum(s[left])){
        left++;
    }

    while(right > left && !checkAlphaNum(s[right])){
        right--;
    }

    if(s[left].toLowerCase() !== s[right].toLowerCase()){
        return false;
    }

    left++;
    right--;
  }

  return true;
};

function checkAlphaNum(char) {
  if (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    (char >= "0" && char <= "9")
  ) {
    return true;
  }

  return false;
}

let s = "A man, a plan, a canal: Panama"
console.log(isPalindromeOp(s));
