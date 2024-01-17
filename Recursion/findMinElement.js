/**
 * GFG Recursion
 * https://www.geeksforgeeks.org/recursive-programs-to-find-minimum-and-maximum-elements-of-array/
 */

const findMinElement = (arr) => {
    return recursiveComparator(arr, arr.length - 1);
}

const recursiveComparator = (arr, index) => {

    if(index === 0){
        return arr[0];
    }

    let minElementTillPoint = recursiveComparator(arr, index - 1);
    if(arr[index] < minElementTillPoint){
        return arr[index];
    }else{
        return minElementTillPoint;
    }

}

console.log(findMinElement([1, 4, 3, -5, -40, 8, 6]))