/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
Example:
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

*/

 function ListNode(val) {
  this.val = val;
  this.next = null;
 }

function mergeKLists(lists) {
  let store = [];

  lists.forEach(list => {
    while (list) {
      store.push(list);
      list = list.next;
    }
  });
  store.sort((a, b) => a.val - b.val)

  console.log(store)
  let current = new ListNode(null);
  let head = current;

  for (let i = 0; i < store.length; i++) {
    let list = store[i];
    console.log("*")
    console.log("list")
    console.log(list)
    current.next = list;
    console.log("current")
    console.log(current)
    current = current.next;
    console.log("current = current.next")
    console.log(current)
    console.log("head")
    console.log(head)
  }

  head = head.next;
  current.next = null;

  return head;
}

let headA = new ListNode(1)
let b = new ListNode(4)
let c = new ListNode(5)
headA.next = b, b.next = c;

let headB = new ListNode(1)
let d = new ListNode(3)
let e = new ListNode(4)
headB.next = d, d.next = e;

let headC = new ListNode(2)
let f = new ListNode(6)
headC.next = f;

let arr = [headA, headB, headC]
console.log(mergeKLists(arr))