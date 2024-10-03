/*

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

// TC: O(n) * O(m)
// SC: O(n) * O(m)

var groupAnagrams = function (strs) {
  let hashMap = new Map(); // O(n)
  let ans = []; // o(n);

  for (let word of strs) {
    let hashArr = Array(26).fill(0);

    for (let char of word) {
      hashArr[char.charCodeAt() - 97]++;
    }

    hashArr = hashArr.join(""); // ("") => eat, () => e,a,t

    if (hashMap.has(hashArr)) {
      hashMap.get(hashArr).push(word);
    } else {
      hashMap.set(hashArr, [word]);
    }
  }

  for (let value of hashMap.values()) {
    ans.push(value);
  }

  return ans;
};

/*

You can also solve this problem using sort

TC: O(n) * O(mlog(m));
SC: O(n) * o(m);

*/

function groupAnagram(strs) {
  let map = new Map();

  for (let word of strs) {
    word = word.split("").sort().join("");

    if (map.has(word)) {
      map.get(word).push(strs[i]);
    } else {
      map.set(word, [strs[i]]);
    }
  }

  for (let value of map.values()) { 
    ans.push(value);
  }

  return ans;
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
