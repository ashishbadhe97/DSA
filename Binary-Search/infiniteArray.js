// Q find target element from infinite array

let arr = [2,6,7,15,18,25,30,35,38,40,45,100];

let target = 35;

let startRange = 0;
let endRange = 1;

while(target > arr[endRange]){
    let orignalStart = startRange;
    startRange = endRange + 1;
    endRange = ((endRange - orignalStart) * 2) + startRange;
}

const binarySearch = (startRange, endRange, arr, target) => {

    let start = startRange;
    let end = endRange;
    // [2,  6,  7, 15, 18,25, 30, 35, 38, 40] 

    while(start <= end){

        let mid = Math.trunc(start + (end - start) / 2);
        if(arr[mid] === target){
            return arr[mid];
        }else if(arr[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return -1;
}

const ans = binarySearch(startRange, endRange, arr, target);

console.log(ans);