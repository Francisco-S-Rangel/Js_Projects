// https://leetcode.com/problems/remove-duplicates-from-sorted-list/?envType=problem-list-v2&envId=linked-list
class ListNode {
    val: number;
    next:  ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0: val);
        this.next = (next === undefined ? null : next);
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let currentNode: ListNode | null = head;

    while (currentNode !== null && currentNode.next != null) {
        let nextPosition: ListNode | null = currentNode.next;
        if (nextPosition?.val === currentNode.val) {
            currentNode.next = nextPosition.next;
        } else {
            currentNode = nextPosition;
        }
    }

    return head;
}

let list = new ListNode(1);
list.next = new ListNode(1);
list.next.next = new ListNode(1);
list.next.next.next = new ListNode(3);

console.log(deleteDuplicates(list));