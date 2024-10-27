/*

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]

Time Complexity: O(n)
Space Complexity: O(n)
*/

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;

    let dummyNode = new ListNode(-1);
    let temp = dummyNode;

    while(l1 && l2){

        let sum = l1.val + l2.val + carry;

        let newNode = new ListNode(-1);
        temp.next = newNode;

        if(sum < 9){
            newNode.val = sum;
        }else{
            let rem = sum % 10;
            newNode.val = rem;
        }

        carry = Math.trunc(sum / 10);

        l1 = l1.next;
        l2 = l2.next;
        temp = temp.next;
    }

    while(l1){
        let newNode = new ListNode(-1);
        temp.next = newNode;

        let sum = l1.val + carry;

        if(sum < 9){
            newNode.val = sum;
        }else{
            let rem = sum % 10;
            newNode.val = rem;
        }
        carry = Math.trunc(sum / 10);

        l1 = l1.next;
        temp = temp.next;
    }

    while(l2){
        let newNode = new ListNode(-1);
        temp.next = newNode;

        let sum = l2.val + carry;

        if(sum < 9){
            newNode.val = sum;
        }else{
            let rem = sum % 10;
            newNode.val = rem;
        }
        carry = Math.trunc(sum / 10);

        l2 = l2.next;
        temp = temp.next;
    }

    if(carry){
        temp.next = new ListNode(carry);
    }

    return dummyNode.next;
};