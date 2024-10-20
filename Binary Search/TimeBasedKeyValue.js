/*
Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]
*/


var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.map.has(key)){
        this.map.get(key).push([value, timestamp]);
    }else{
        this.map.set(key, [[value, timestamp]])
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    
    if(!this.map.has(key)){
        return ""
    }

    let values = this.map.get(key);

    if(timestamp > values[values.length - 1][1]){
        return values[values.length - 1][0]
    }

    // if(timestamp < values[0][1]){
    //     return ""
    // }

    let start = 0, end = values.length - 1;

    while(start <= end){

        let mid = Math.trunc(start + (end -start) / 2);

        if(values[mid][1] === timestamp){
            return values[mid][0];
        }

        if(values[mid][1] > timestamp){
            end = mid - 1;
        }

        if(values[mid][1] < timestamp){
            start = start + 1;
        }
    }

    if(end >= 0){
        return values[end][0];
    }

    return ""
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */