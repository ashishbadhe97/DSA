

const mergeSort = (start, end, arr) => {

    if(start === end){
        return [arr[start]];
    }

    let mid = Math.trunc(start + (end - start) / 2);

    let arr1 = mergeSort(start, mid, arr);
    let arr2 = mergeSort(mid + 1, end, arr);

    let p1 = 0;
    let p2 = 0;

    let mergedArray = [];

    while(p1 < arr1.length && p2 < arr2.length){

        if(arr1[p1] > arr2[p2]){
            mergedArray.push(arr2[p2]);
            p2++;
        }else if(arr2[p2] > arr1[p1]){
            mergedArray.push(arr1[p1]);
            p1++;
        }else{
            mergedArray.push(arr2[p2]);
            mergedArray.push(arr1[p1]);
            p1++;
            p2++;
        }
    }

    for(let i = p1 ; i < arr1.length ; i++){
        mergedArray.push(arr1[i]);
    }
    for(let i = p2 ; i < arr2.length ; i++){
        mergedArray.push(arr2[i]);
    }

    return mergedArray;
}

const mergeSortInPlace = (start, end, arr) => {

    if(start === end){
        return start;
    }

    let mid = Math.trunc(start + (end - start) / 2);

    let p1 = mergeSortInPlace(start, mid, arr);
    let p2 = mergeSortInPlace(mid + 1, end, arr);

    while(p1 <= mid && p2 <= end){
        if(arr[p1] > arr[p2]){
            swap(p1, p2, arr)
            p2++;
        }else if(arr[p2] > arr[p1]){
            swap(p1, p2, arr);
            p1++;
        }else{
            swap(p1, p2, arr);
            p1++;
            p2++;
        }
    }

    return arr;
}

const swap = (ind1, ind2, arr) => {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}


let arr = [18,3,4,12,5,6];
// let ans = mergeSort(0, arr.length - 1, arr);
let ans = mergeSortInPlace(0, arr.length - 1, arr);
console.log(ans);