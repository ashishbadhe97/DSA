/*
150. Evaluate Reverse Polish Notation

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

TC: O(n)
*/


function evalExp(token, firstNo, secNo) {

    if(token === "+"){
        return firstNo + secNo;
    }

    if(token === "-"){
        return firstNo - secNo;
    }

    if(token === "*"){
        return firstNo * secNo;
    }

    if(token === "/"){
        return Math.trunc(firstNo / secNo);
    }

    return 0;
}

const evalRPN = (tokens) => {

    let stack = [];

    for(let token of tokens){

        if(token === "+" || token === "-" || token === "/" || token === "*"){
            let secNo = stack.pop();
            let firstNo = stack.pop();
            let exp = evalExp(token, firstNo, secNo);
            stack.push(exp);
        }else{
            token = +(token)
            stack.push(token);
        }
    }

    return stack.pop();
}

let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));