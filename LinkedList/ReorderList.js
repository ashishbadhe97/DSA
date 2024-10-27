/*

Input: head = [1,2,3,4]
Output: [1,4,2,3]

*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function findMid(head) {

    let slow = head;
    let fast = head.next;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow;
    slow.next = null;
    return mid;
}

function reverseLL(head) {
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

function mergeLL(l1, l2){

    let temp1 = l1, temp2 = l2;

    let dummyNode = new NodeList(-1);

    let temp = dummyNode;

    while(temp1 && temp2){
        temp.next = temp1;
        temp1 = temp1.next;
        temp = temp.next

        temp.next = temp2;
        temp2 = temp2.next;
        temp = temp.next;
    }

    if(temp1) temp.next = temp1;
    if(temp2) temp.next = temp2;

    return dummyNode.next;
}

function reorderList(head) {
    let mid = findMid(head);

    let l2 = reverseLL(mid);

    return mergeLL(l1, l2);
}
