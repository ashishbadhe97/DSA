/*

Input: s1 = "ab", s2 = "eidbaooo"
Output: true

TimeComplexity: o(n)
Space Complexity: o(1)

*/

function checkInclusion(s1, s2) {

    let hashArr = Array(26).fill(0);

    for(let i = 0 ; i < s1.length ; i++){
        hashArr[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
        hashArr[s2[i].charCodeAt() - 'a'.charCodeAt()]--;
    }

    if(hashArr.every(ele => ele === 0)) return true;

    for(let i = s1.length ; i < s2.length ; i++){
        hashArr[s2[i - s1.length].charCodeAt() - 'a'.charCodeAt()]++;
        hashArr[s2[i].charCodeAt() - 'a'.charCodeAt()]--;

        if(hashArr.every(ele => ele === 0)) return true;
    }

    return false;

}

let s1 = "ab", s2 = "eidboaoo"
console.log(checkInclusion(s1, s2));