var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let start = 1;
        let end = n;

        while(start < end){

            let mid = Math.trunc(start + (end - start) / 2);

            if(isBadVersion(mid) && !isBadVersion(mid - 1)){
                return mid;
            }else if(!isBadVersion(mid) && isBadVersion(mid + 1)){
                return mid + 1;
            }else if(!isBadVersion(mid)){
                start = mid + 1;
            }else if(isBadVersion(mid)){
                return mid;
            }else{
                end = mid - 1;
            }
        }

        return -1;
    };
};


const isBadVersion = (num) => {

    if(num === 1){
        return true;
    }

    return false;
}

console.log(solution(isBadVersion)(3));