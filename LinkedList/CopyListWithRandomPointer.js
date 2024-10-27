/*

Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]


TimeComplexity: O(n) + o(n) + o(n)
Space Complexity: o(n)
*/

function _Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

var copyRandomList = (head) => {
  if (!head) return head;

  let temp = head;

  while (temp) {
    let copyNode = new _Node(temp.val, temp.next, null);

    temp.next = copyNode;

    temp = temp.next.next;
  }

  temp = head;

  while (temp) {
    temp.next.random = temp.random !== null ? temp.random.next : null;
    temp = temp.next.next;
  }

  temp = head;
  let temp2 = head.next;
  let newHead = temp2;

  while (temp2) {
    temp.next = temp2.next;
    temp = temp.next;

    if(temp === null){
        break;
    }

    temp2.next = temp.next;
    temp2 = temp2.next;
  }

  return newHead;
};
