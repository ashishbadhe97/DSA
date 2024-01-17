/**
 * 344. Reverse String
 * 
 * https://leetcode.com/problems/reverse-string/description/
 */


var reverseString = function(s) {
    swap(0, s.length - 1, s)
    console.log(s);
};

const swap = (start, end, s) => {

    if(start >= end){
        return;
    }

    let temp = s[end];
    s[end] = s[start];
    s[start] = temp;
    start++;
    end--;
    swap(start, end, s) // 
}

reverseString(["h","e","l","l","o"])