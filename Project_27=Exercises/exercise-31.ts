// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined? 0 : val;
        this.left = left === undefined? null : left;
        this.right = right === undefined? null : right;
    }
}

// function inorderTraversal(root: TreeNode | null): number[] {
//     const rootNodes: [TreeNode | null] = [root];
//     let inorderTree: number[] = [];

//     while (rootNodes.length > 0) {
//         const currentRoot = rootNodes.shift()!;

//         if (currentRoot === null)
//             continue;

//         inorderTree.push(currentRoot.val);
//         rootNodes.push(currentRoot.left, currentRoot.right);
//     }

//     return inorderTree;
// }

function inorderTraversal(root: TreeNode | null): number[] {
    const rootNodes: TreeNode[] = [];
    let currentNode: TreeNode | null = root;
    let inorderTree: number[] = [];

    while (rootNodes.length > 0 || currentNode !== null) {
        while (currentNode !== null) {
            rootNodes.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = rootNodes.pop()!;
        inorderTree.push(currentNode.val);

        currentNode = currentNode.right;
    }

    return inorderTree;
}
