/**
 * Sum of Digits
 */


const sumDigits = (num) => {

    if(num <= 1){
        return 1;
    }

    return (num % 10) + sumDigits(Math.trunc(num / 10));
}

console.log(sumDigits(12345));