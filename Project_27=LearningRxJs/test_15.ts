// class ListNode {
//     val: number;
//     next:  ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0: val);
//         this.next = (next === undefined ? null : next);
//     }
// }

function mergedTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let newList: ListNode | null = new ListNode();
    let currentNode: ListNode | null = newList;

    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }

        currentNode = currentNode?.next;
    }

    currentNode.next = list1 || list2;
    return newList.next;
}

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

console.log(mergedTwoLists(list1, list2));

let list3 = new ListNode();
let list4 = new ListNode(0);

console.log(mergedTwoLists(list3, list4));