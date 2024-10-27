/*

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Time Complexity: O(n)
Space Complexity: o(1)
*/

const removeNthFromEnd = (head, n) => {

    let slow = head, fast = head;

    while(n > 0){
        fast = fast.next;
        n--;
    }

    if(!fast) return head.next;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return head;
}

