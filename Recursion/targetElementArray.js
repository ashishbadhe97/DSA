

const targetElement = (arr, target, i) => {

    let ans = [];

    if(i >= arr.length){
        return ans;
    }

    if(arr[i] === target){
        ans.push(i);
    }

    return [...ans, ...targetElement(arr, target, i + 1)]
}


console.log(targetElement([1,2,3,4,4,5], 2, 0));