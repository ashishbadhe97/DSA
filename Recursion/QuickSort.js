

const quickSort = (arr, start, end) => {

    if(start >= end){
        return;
    }

    let low = start;
    let high = end;
    let pivot = arr[start];

    while(start < end){

        while(arr[start] < pivot){
            start++;
        }

        while(arr[end] > pivot){
            end--;
        }

        swap(start, end, arr);
    }

    quickSort(arr, low, end - 1);
    quickSort(arr, end + 1, high);

}

const swap = (ind1, ind2, arr) => {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

let arr = [10,9,8,7,6,5,4,3,2,1];
quickSort(arr, 0, arr.length - 1);
console.log(arr);