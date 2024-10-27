/*

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


Time Complexity: O(n)
Space Complexity: O(1)
*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (val === undefined ? null : next);
}

var reverseList = (head) => {

    let temp = head;
    let prev = null;

    while(temp){
        let nextNode = temp.next;
        temp.next = prev;
        prev = temp;
        temp = nextNode;
    }

    return prev;
}