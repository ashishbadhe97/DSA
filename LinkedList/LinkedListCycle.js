/*

Input: head = [3,2,0,-4], pos = 1
Output: true

Time Complexity: O(n)
Space Complexity: O(1)

*/


var hasCycle = function(head) {
    
    let slow = head;
    let fast = head;

    do{
        if(slow === fast){
            return true;
        }

        fast = fast.next.next;
        slow = slow.next;
    }while (fast && fast.next)

    return false;
};