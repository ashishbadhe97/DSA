let arr = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];

const binarySearch = (arr) => {

    let start = 0;
    let end = arr.length - 1;

    while(start <= end){

        let mid = Math.trunc(start + (end - start) / 2);

        if(arr[mid] > arr[mid + 1]){
            end = mid;

            if(arr[mid] > arr[mid - 1]){
                return end;
            }
        }else if(arr[mid] < arr[mid + 1]){
            start = mid + 1;
        }
    }

    return -1;
}

console.log(binarySearch(arr));
