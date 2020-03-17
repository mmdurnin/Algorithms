function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {

  if (l1 === null && l2 === null) return null;
  if (l1 === null || l2 === null) return (l1 === null) ? l2 : l1;

  let head = new ListNode(null);
  let temp = head;

  while (l1 && l2) {
    if (!l1)
      temp.next = l2;
    if (!l2)
      temp.next = l1;

    if (l1.val > l2.val) {
      temp.next = l2;
      l2 = l2.next;
    } else {
      temp.next = l1;
      l1 = l1.next;
    }
    temp = temp.next;
  }

  if (!!l1 || !!l2) temp.next = (!l1) ? l2 : l1;

  return head.next;
};