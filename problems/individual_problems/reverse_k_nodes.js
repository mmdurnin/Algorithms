/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
k is a positive integer and is less than or equal to the length of the linked list. 
If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:
Given this linked list: 1->2->3->4->5
For k = 2, you should return: 2->1->4->3->5
For k = 3, you should return: 3->2->1->4->5

Note:
Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverseKNodes(head, k) {
  let ref1 = head;
  let ref2 = head;

  let trail = new ListNode(0);
  let result = trail;
  trail.next = head;

  while (ref2) {
    ref2 = advance(ref2, k);
    if (!ref2) return result.next;
    
    let finalNode = reverseSection(trail, ref1, ref2, ref2.next)
    if (finalNode.next) 
      ref1 = finalNode.next;
      ref2 = finalNode.next;
      trail = finalNode;

  }
  test(result.next)
  return result.next;
}

function advance(ref, k) {

  test(ref)

  for (let i = 1; i < k; i++) {
    if (!ref.next) return null;
    ref = ref.next;
  }

  test(ref)

  return ref;
}

function reverseSection(before, head, tail, after) {
  tail.next = null;
  let prev = null;
  let current = head;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head.next = after;
  before.next = prev;

  return head;
}

function test(list) {
  let arr = [];
  while (!!list) {
    arr.push(list.val)
    list = list.next
  }
}



let headA = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
let e = new ListNode(5)
let f = new ListNode(6)
headA.next = b, b.next = c, c.next = d;
d.next = e, e.next = f, f.next = null;


console.log(reverseKNodes(headA, 4))