// https://leetcode.com/problem-list/linked-list/
// https://leetcode.com/problems/reverse-linked-list/description/?envType=problem-list-v2&envId=linked-list

// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0: val);
//         this.next =  (next === undefined ? null: next);
//     }
// }

function reverseList(head: ListNode | null): ListNode | null {
    let reversedList: ListNode | null = null;
    let currentNode: ListNode | null = head;

    while (currentNode != null) {
        let nextPostion: ListNode | null = currentNode.next;
        currentNode.next = reversedList;
        reversedList = currentNode;
        currentNode = nextPostion;
    }

    return reversedList;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(reverseList(head));