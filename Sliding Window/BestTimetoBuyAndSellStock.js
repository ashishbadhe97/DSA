/*

prices = [7,1,5,3,6,4]

Time Complexity: O(n)
Space Complexity: O(1)
*/

var maxProfit = function(prices) {
    
    if(prices.length <= 1) return 0;

    let minPrice = prices[0], maxProfit = 0

    for(let price of prices){

        if(price > minPrice){
            maxProfit = Math.max(maxProfit, price - minPrice);
        }

        if(price < minPrice){
            minPrice = price;
        }

    }

    return maxProfit;
};