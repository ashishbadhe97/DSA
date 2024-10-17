/*

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

*/


var binarySearch = (matrix, row, target) => {

    let arr = matrix[row];
    let s = 0, e = arr.length - 1;

    while(s <= e){

        let m = Math.trunc(s + (e - s) / 2);

        if(arr[m] === target) return true;;

        if(arr[m] < target) s = s + 1;

        if(arr[m] > target) e = m - 1;
    }

    return false;
}

var matrixSearch = function(matrix, target) {

    let sRow = 0, eRow = matrix.length - 1;
    let n = matrix[0].length - 1;

    while(sRow <= eRow){

        let mRow = Math.trunc(sRow + (eRow - sRow) / 2);

        if(matrix[mRow][n] === target){
            return true;
        }

        if(matrix[mRow][n] < target){
            sRow = mRow + 1;
        }

        if(matrix[mRow][n] > target && matrix[mRow][0] <= target){
            return binarySearch(matrix, mRow, target);
        }

        if(matrix[mRow][n] > target){
            eRow = mRow - 1;
        }
    }

    return false
}

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
console.log(matrixSearch(matrix,target));
