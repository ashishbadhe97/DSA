/*

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

TC: O(n) + O(n)
SC: O(26)

*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let hashMap = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i].charCodeAt() - 97]++;
    hashMap[t[i].charCodeAt() - 97]--;
  }

  if (hashMap.every((ele) => ele === 0)) return true;

  return false;
};

let s = "anagram",
  t = "nagaram";

console.log(isAnagram(s, t));
