// Q - Find ceiling of a number 

let arr = [2, 3, 5, 9, 14, 16, 18]
//         0  1  2  3  4    5   6

let target = 1;


const binarySearchCeiling = (arr) => {

    let start = 0;
    let end = arr.length - 1;

    if(target > arr[arr.length - 1]){
        return -1;
    }

    while(start <= end){

        let mid = Math.trunc(start + (end - start) / 2);

        if(arr[mid] === target){
            return arr[mid];
        }else if(arr[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1
        }
    }

    return arr[start];
}

const binarySearchFloor = (arr) => {

    let start = 0;
    let end = arr.length - 1;

    if(target < arr[0]){
        return -1;
    }

    while(start <= end){    // (start <= end) makes start , end and mid all equal in last iteration 

        // but at (start < end) it returns the target element 

        let mid = Math.trunc(start + (end - start) / 2);
        if(arr[mid] === target){
            return arr[mid];
        }else if(arr[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return arr[end];
}

let ans = binarySearchFloor(arr);

console.log(ans);


