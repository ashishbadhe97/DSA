// 374

var guessNumber = function(n) {
    
    let start = 1;
    let end = n;

    while(start <= end){

        let mid = Math.trunc(start + (end - start) / 2);

        if(guess(mid) === -1){
            start = mid + 1;
        }else if(guess(mid) === 1){
            end = mid - 1;
        }else{
            return mid;
        }
        
    }

    return -1;
};

const guess = (mid) => {

    if(mid < 6){
        return 1
    }else if(mid > 6){
        return -1
    }else {
        return 0;
    }
}

console.log(guessNumber(10))