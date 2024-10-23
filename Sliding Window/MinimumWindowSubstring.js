/*

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

Time Complexity: O(m + n)
Space Complexity: O(1) because at max both maps can store limited ASCII values;

*/


var minWindow = function(s, t) {

    if(t.length > s.length) return "";

    let sMap = {}, tMap = {};

    let have = 0, need = t.length;

    let l = 0, r = 0;

    let ans = [-1, -1], minLeng = s.length + 1;

    for(let char of t){
        tMap[char] = (tMap[char] || 0) + 1;
    }

    while(r < s.length){

        sMap[s[r]] = (sMap[s[r]] || 0) + 1;

        if(tMap[s[r]] && tMap[s[r]] >= sMap[s[r]]){
            have++
        }

        while(have === need){
            let currLen = r - l + 1;
            if(currLen < minLeng){
                minLeng = currLen;
                ans = [l, r];
            }

            if(tMap[s[l]]){
                sMap[s[l]] -= 1;

                if(sMap[s[l]] < tMap[s[l]]){
                    have--;
                }
            }
            l = l + 1;
        }
        r++;
    }

    return s.slice(ans[0], ans[1] + 1);
}

let s = "ADOBECODEBANC", t = "ABC"
console.log(minWindow(s,t));