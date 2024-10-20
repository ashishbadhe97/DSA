/*

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000

Time Complexity: O(m + n) expected is log(m + n);
Space Compexity: O(1)
*/

function findMedianSortedArrays(nums1, nums2) {

    let arr = [], ind = 0;

    let p1 = 0, p2 = 0;

    let indCnt = -1;

    let isEven = (nums1.length + nums2.length) % 2;

    let totalLength = nums1.length + nums2.length - 1;

    let mid = Math.trunc(totalLength / 2); // 1

    while(p1 < nums1.length && p2 < nums2.length){

        if(nums1[p1] > nums2[p2]){
            indCnt++; // 1
            ind = nums2[p2]; // 2
            p2++; // 1
        }else{
            indCnt++; // 0
            ind = nums1[p1]; // 1
            p1++; // 1
        }

        if(mid === indCnt){
            arr.push(ind);

            if(isEven) return arr[0];
        }

        if(mid + 1 === indCnt){
            arr.push(ind);
            break;
        }
    }

    while(p1 < nums1.length){
        indCnt++;
        ind = nums1[p1];
        p1++;

        if(mid === indCnt){
            arr.push(ind);

            if(isEven) return arr[0]
        }

        if(mid + 1 === indCnt){
            arr.push(ind);
            break;
        }
    }

    while(p2 < nums2.length){
        indCnt++; // 2
        ind = nums2[p2]; // 3
        p2++; // 1

        if(mid === indCnt){
            arr.push(ind);

            if(isEven) return arr[0]
        }

        if(mid + 1 === indCnt){
            arr.push(ind);
            break;
        }
    }

    return (arr[0] + arr[1]) / 2
    
}

let nums1 = [2,2,4,4],
  nums2 = [2,2,2,4,4];

console.log(findMedianSortedArrays(nums1, nums2));
