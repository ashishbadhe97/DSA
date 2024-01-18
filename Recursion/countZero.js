const countZero = (num, count) => {
    
    if(num < 1){
        return count;
    }
    
    if(num % 10 === 0){
        count++;
    }
    
    return countZero(Math.trunc(num / 10), count);
}

let count = 0;
console.log(countZero(2009094,count));