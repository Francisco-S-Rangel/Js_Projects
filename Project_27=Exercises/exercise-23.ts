// https://leetcode.com/problems/same-tree/submissions

// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;

//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = val === undefined? 0 : val;
//         this.left = left === undefined? null : left;
//         this.right = right === undefined? null : right;
//     }
// }

// BFS (Breadth-First Search)
function isSameTreeBFS(p: TreeNode | null, q: TreeNode | null): boolean {
    const queueNodes: [TreeNode | null, TreeNode | null][] = [[ p, q]];

    while (queueNodes.length > 0) {
        const [currentP, currentQ] = queueNodes.shift()!;

        if (currentP === null && currentQ === null)
            continue;
        
        if (currentP === null || currentQ === null)
            return false;

        if (currentP.val !== currentQ.val)
            return false;

        queueNodes.push([currentP.left, currentQ.left]);
        queueNodes.push([currentP.right, currentQ.right]);
    }

    return true;
}

// DFS (Depth-First Search)
function isSameTreeDFS(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null || q === null)
        return true;

    if (p === null || q === null)
        return false;

    if (p.val !== q.val)
        return false;

    return isSameTreeDFS(p.left, q.left) && isSameTreeDFS(p.right, q.right);
}

