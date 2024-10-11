/*

Input: s = "()"

Output: true

TC: O(n);
SC: O(n);

*/

var isValid = function(s) {
    let stack = [];

    for(let bracket of s){

        if(bracket === "(" || bracket === "{" || bracket === "["){
            stack.push(bracket);
        }

        if(bracket === ")" && stack.pop() !== "("){
            return false;
        }

        if(bracket === "}" && stack.pop() !== "{"){
            return false;
        }

        if(bracket === "]" && stack.pop() !== "["){
            return false;
        }
    }

    if(stack.length > 0) return false;

    return true;
};

