// Strictly sorted row wise and column wise

let arr = [
  [10, 20, 30, 38],
  [11, 23, 27, 47],
  [15, 28, 37, 51],
  [19, 32, 47, 89],
];

let target = 19;

/*

Set lowerBound = 0 and upperBound = row.length - 1;

case 1. If arr[upperBound] > target , then all the elements in that column are greater than target as it is row and column wise sorted

hence col--;

case 2. If arr[upperBound] < target , then all the elements in that row are less that target

hence row++;

case 3. If arr[upperBound] == target , return index;


*/

const findElementInMatrix = (arr, target) => {
  let row = 0;
  let col = arr[0].length - 1;

  let lowerBound = arr[row][0];
  let upperBound = arr[row][col];

  while (row < arr.length && col >= 0) {
    if (upperBound > target) {
      col--;
      if (col >= 0) {
        upperBound = arr[row][col];
      }
    } else if (upperBound < target) {
      row++;
      if (row < arr.length) {
        lowerBound = arr[row][0];
        upperBound = arr[row][col];
      }
    } else if (upperBound === target) {
      return true;
    }
  }

  return -1;
};

//console.log(findElementInMatrix(arr, target));

// ===========================================================

let brr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 23, 48],
];


let tar = 23;

// time Complexity = N log(N)
const findElementInSortedMatrix = (arr, target) => {

  let row = 0;

  while(row < arr.length){

    if(arr[row][row.length - 1] === target){
     return [row, row.length - 1];
    }else if((arr[row][arr[row].length - 1] < target)){
      row++;
    }else{
      let index = binarySearch(arr[row], tar);

      if(index === -1){
        return [-1, -1]
      }

      return [row , index];
    }
  }
}

// time Complexity = log(N) + log(M)
const findElementInSortedMatrixBS = (arr, target) => {

  let rStart = 0;
  let rEnd = arr.length - 1;

  while(rStart <= rEnd){

    let rMid = Math.trunc(rStart + (rEnd - rStart) / 2);
    
    if(arr[rMid][arr[rMid].length - 1] === target){
      return [rMid, arr[rMid].length - 1];
    }else if(arr[rMid][arr[rMid].length - 1] < target){
      rStart = rMid + 1;
    }else if(rMid === 0 || rMid === arr.length - 1 || arr[rMid][arr[rMid].length - 1] > target && arr[rMid - 1][arr[rMid].length - 1] < target){
      let index =  binarySearch(arr[rMid], target);

      if(index !== -1){
        return [rMid, index];
      }else{
        break;
      }
    }
    else{
      rEnd = rMid - 1;
    }
  }

  return [-1, -1];
}


const binarySearch = (arr, target) => {

  let start = 0;
  let end = arr.length - 1;

  while(start <= end){

    let mid = Math.trunc(start + (end - start) / 2);

    if(arr[mid] === target){
      return mid;
    }else if(arr[mid] > target){
      end = mid - 1;
    }else{
      start = mid + 1
    }
  }

  return -1;
}


// console.log(findElementInSortedMatrix(brr, tar));


console.log(findElementInSortedMatrixBS(brr, tar));