

var countNegatives = function(grid) {
    
    let row = 0;
    let col = grid[row].length - 1;

    let count = 0;


    while(row < grid.length && col >= 0){

        if(grid[row][0] < 0){
            count += col + 1;
            row++;
        }else if(grid[row][col] < 0){
            count += grid.length - row;
            col--;
        }else if(grid[row][0] >= 0 && grid[row][col] >= 0){
            row++;
        }else{
            count = count + binarySearch(arr, count);
        }
    }

    return count;
};

const binarySearch = (arr, count) => {

    let start = 0;
    let end = arr.length - 1;

    while(start <= end){

        let mid = Math.trunc(start + (end - start) / 2);

        if(arr[mid] >= 0){
            start = mid + 1;
        }else{
            count = count + (end - mid);
            end = mid - 1;
        }
    }

    return count;

}

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

console.log(countNegatives(grid));