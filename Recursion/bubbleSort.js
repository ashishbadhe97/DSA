
const bubbleSort = (n, arr, index) => {

    if(n < 1){
        return arr;
    }

    if(index > n){
        return bubbleSort(n - 1, arr, 0);
    }

    if(arr[index] > arr[index + 1]){
        swap(index, index + 1, arr);
    }

    return bubbleSort(n, arr, index + 1);
}

const swap = (ind1, ind2, arr) => {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

let arr = [5,6,7,8,11,23,11,222,4444,555,4,3,2,1];
console.log(bubbleSort(arr.length - 1, arr, 0));