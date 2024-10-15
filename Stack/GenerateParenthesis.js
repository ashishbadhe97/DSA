/*

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

*/

function generateParenthesis(n) {
  let open = n, close = n;
  let ans = [];
  let output = "(";

  return helper(output, open - 1, close, ans);
}

function helper(prevOp, open, close, ans) {
    if(open === 0 && close === 0){
        return ans.push(prevOp);
    }

    if(open > close) return;

    if(open < 0) return;

    let op1 = prevOp + "(";
    let op2 = prevOp + ")";

    helper(op1, open - 1, close, ans);
    helper(op2, open, close - 1, ans);

    return ans;
}

let n = 4;
console.log(generateParenthesis(n));
