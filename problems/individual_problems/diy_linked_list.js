class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

class LinkedList {
  constructor(...vals) {
    this.head = new ListNode(vals[0]);
    this.tail = new ListNode(vals[1]);

    this.head.next = this.tail;

    for (let i = 2; i < vals.length; i++) {
      let current = new ListNode(vals[i]);
      this.tail.next = current;
      this.tail = this.tail.next;
    }
  }

  has(val) {
    let current = this.head;

    while (!!current) {
      if (current.val === val) return true;
      current = current.next;
    }

    return false;
  }

  add(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
    return this.head;
  }
}

let ll = new LinkedList(1, 2, 3, 4, 5)
console.log(ll.has(3));
console.log(ll.tail);
console.log(ll.add(8));
console.log(ll.tail);
