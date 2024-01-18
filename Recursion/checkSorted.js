
const checkSorted = (arr, i) => {

    console.log("ashish", i)

    if(i >= arr.length - 1){
        return true;
    }

    // if(arr[i] < arr[i + 1]){
    //     return false;
    // }

    return arr[i] < arr[i + 1] && checkSorted(arr, i + 1);
}

console.log(checkSorted([2,4,5,67,99,78], 0));