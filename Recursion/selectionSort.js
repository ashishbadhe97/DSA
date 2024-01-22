

const selectionsSort = (row, col, max, arr) => {

    if(row < 1){
        return;
    }

    if(col <= row){

        if(arr[col] > arr[max]){
            max = col;
        }
        selectionsSort(row, col + 1, max, arr);
    }else{
        swap(max, row, arr);
        selectionsSort(row - 1, 0, 0, arr);
    }
}

const swap = (ind1, ind2, arr) => {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

let arr = [4,3,2,1];
let maxElement = arr[0];
selectionsSort(arr.length - 1, 0, 0, arr);
console.log(arr);
