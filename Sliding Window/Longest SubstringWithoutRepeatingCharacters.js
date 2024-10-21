/*

Input: s = "abcabcbb"
Output: 3

Time Complexity: O(n)
Space Complexity: O(n)
*/


var lengthOfLongestSubstring = function(s) {

    if(s.length <= 1) return s.length;
   
    let map = new Map();
    let maxLen = 0;

    let l = 0, r = 0;

    while(r < s.length){

        if(map.has(s[r])){
            if(map.get(s[r]) >= l){
                l = map.get(s[r]) + 1;
            }
        }

        map.set(s[r], r);
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }

    return maxLen;
};

let s = "bbbbb"
console.log(lengthOfLongestSubstring(s));