class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sumList: ListNode | null = new ListNode();
    let currentNode: ListNode | null = sumList;
    let carry: number = 0;

    while (l1 !== null || l2 !== null) {
        let value1: number = 0;
        let value2: number = 0;

        if (l1 !== null) {
            value1 = l1.val;
        }

        if (l2 !== null) {
            value2 = l2.val;
        }

        let total: number = value1 + value2 + carry;

        if (l1?.next === null && l2?.next === null && total < 10) {
            carry = 0;
        } else if (total >= 10) {
            total = total - 10;
            carry = 1;
        } else {
            carry = 0;
        }

        currentNode.next = new ListNode(total);
        currentNode = currentNode.next;

        if (l1 !== null)
            l1 = l1.next;
        if(l2 !== null)
            l2 = l2.next;
    }

    if (carry !== 0) {
        currentNode.next = new ListNode(carry);
        carry = 0;
    }

    return sumList.next;
};

function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sumList: ListNode | null = new ListNode();
    let currentNode: ListNode | null = sumList;
    let carry: number = 0;

    while (l1 || l2 || carry) {
        let value1: number = l1 ? l1.val : 0;
        let value2: number = l2 ? l2.val : 0;
        let total: number = value1 + value2 + carry;

        if (total >= 10) {
            total -= 10;
            carry = 1;
        } else {
            carry = 0;
        }

        currentNode.next = new ListNode(total);
        currentNode = currentNode.next;

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    } 

    return sumList.next;
}

// const list1 = new ListNode(2);
// list1.next = new ListNode(4);
// list1.next.next = new ListNode(3);

// const list2 = new ListNode(5);
// list2.next = new ListNode(6);
// list2.next.next = new ListNode(4);

const list1 = new ListNode(5);
// list1.next = new ListNode(9);
// list1.next.next = new ListNode(9);

const list2 = new ListNode(5);

console.log(addTwoNumbers(list1,list2));