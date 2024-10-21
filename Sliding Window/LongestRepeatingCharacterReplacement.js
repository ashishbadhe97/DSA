/*

Input: s = "ABAB", k = 2
Output: 4

TimeComplexity: o(n)
Space Complexity: o(1)

*/


var characterReplacement = function(s, k) {
  
    let l = 0, r = 0;
    let hashArr = Array(26).fill(0);
    let maxLen = 0

    while(r < s.length){

        hashArr[s[r].charCodeAt() - 'A'.charCodeAt()] = (hashArr[s[r].charCodeAt() - 'A'.charCodeAt()] || 0) + 1;

        let maxFreq = Math.max(...hashArr);

        let eleReqToReplace = (r - l + 1) - maxFreq;

        while(eleReqToReplace > k){
            hashArr[s[l].charCodeAt() - 'A'.charCodeAt()] -= 1;
            l = l + 1;
            maxFreq = Math.max(...hashArr);
            eleReqToReplace = (r - l + 1) - maxFreq;
        }

        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }

    return maxLen;
};

let s = "AABABBA", k = 1
console.log(characterReplacement(s, k));