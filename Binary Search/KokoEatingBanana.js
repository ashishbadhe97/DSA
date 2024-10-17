/*

piles = [3,6,7,11], h = 8


Time Complexity: n + n log m = O(n * log m)
Space Complexity: O(1);

*/

var minEatingSpeed = function(piles, h) {

    let maxPossibleSpeed = Math.max(...piles);

    let s = 1, e = maxPossibleSpeed;

    let minSpeed = maxPossibleSpeed;

    while(s <= e){

        let m = Math.trunc(s + (e - s) / 2);

        let sum = 0;
        
        for(let pile of piles) sum += Math.ceil(pile / m);

        if(sum > h) s = m + 1;

        if(sum <= h){
            minSpeed = Math.min(minSpeed, m);
            e = m - 1;
        }
    }

    return minSpeed;
}


let  piles = [30,11,23,4,20], h = 6
console.log(minEatingSpeed(piles, h));