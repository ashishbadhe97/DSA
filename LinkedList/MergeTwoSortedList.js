/*

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


TIme Complexity: O(n + m)
Space Complexity: O(1)
*/


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    
    let dummyNode = new ListNode(-1, null);

    let temp = dummyNode;

    let t1 = list1, t2 = list2;

    while(t1 && t2){

        if(t1.val > t2.val){
            temp.next = t2;
            t2 = t2.next;
        }else{
            temp.next = t1;
            t1 = t1.next;
        }
        temp = temp.next;
    }

    if(t1) temp.next = t1;
    if(t2) temp.next = t2;

    return dummyNode.next;
};