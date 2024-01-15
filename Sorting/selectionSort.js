
const selectionSort = (arr) => {
    
    for(let i = 0 ; i < arr.length - 1; i++){
        let last = arr.length - 1 - i;
        
        const index = findMaxNo(0, last, arr);

        console.log("Max elemene", arr[index]);
        
        let temp = arr[last];
        arr[last] = arr[index];
        arr[index] = temp;
    }
    
    return arr;
}

const findMaxNo = (start, end, arr) => {
    
    let maxNo = arr[start];
    let index = start;

    
    for(let i = start ; i <= end ; i++){
        if(maxNo < arr[i]){
            maxNo = arr[i];
            index = i;
        }
    }
    
    return index;
}

let arr = [23,1,4,11,32,66];

console.log(selectionSort(arr));