/* 
GRAPH: A graph is a collection of nodes and edges between those nodes
TREE: 
A tree is a type of graph that does not contain any cycles (nodes to children go in one direction)
Mathematicians allow tree to be defined by this alone ("root node" rule does not apply)
Computer scientists reserve the word "tree" exclusively for "rooted" tree, meaning it has a single root node and branches
Regardless, a tree is a tree even if it is composed of 0 nodes and 0 edges

BINARY TREE: A binary tree is one in which there is at MOST 2 branches off of any given node

OTHER TERMS:
Root: The ultimate parent node, can access every other node
Internal Node: A node that has children
Leaf: A node that does not have any children
Path: A series of nodes that can be traveled through edges
*/



// BINARY TREE
// • Terms:
// - "Left" & "Right": The children of a node on either left or right, respectively

// • Implementing Tree Node class:
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// • Creating instances of Tree Nodes:
let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');
let k = new TreeNode('k');

// • Constructing the tree:
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

/*
            a
      b          c
  d      e    f      g

*/







// TREE TRAVERSALS

/* 
I. INORDER, PREORDER, POSTORDER 
- recursive

INORDER (e.g., inOrderPrint function)
* base case = "if there is no root, return"
- print all nodes on the left subtree
- print root
- print all nodes in the right subtree

PREORDER (e.g., preOrderPrint function)
(this is DFS)
- print root
- print all nodes in left subtree
- print all nodes in right subtree

POSTORDER (e.g., postOrderPrint function)
- print all nodes on left
- print all nodes on right
- print root

*/

// INORDER
function inOrderPrint(root) {
    if (!root) return;

    inOrderPrint(root.left);
    console.log(root.val);
    inOrderPrint(root.right);
}

// PREORDER (DFS)
function preOrderPrint(root) {
    if (!root) return;

    console.log(root.val);
    preOrderPrint(root.left);
    preOrderPrint(root.right);
}

// POSTORDER
function postOrderPrint(root) {
    if (!root) return;

    postOrderPrint(root.left);
    postOrderPrint(root.right);
    console.log(root.val);
}

/*
II. Breadth First Search (BFS) & Depth First Search (DFS)

More Vocab:
- b & c are SIBLINGS
- d & e are DESCENDANTS of b
- b, c, d, e, f, & g are DESCENDANTS of a

DFS
* Utilizes a stack ("LIFO" = Last In First Out)
* Recursive

BFS
* Utilizes a queue ("FIFO" = First In First Out)
* Not recursive
* Think of the tree as levels (level 0 = a, level 1 = b, c, etc); address in order of level
* (will return a, b, c, d, e, f, g)

*/

// DFS - ITERATIVE:
function depthFirst(root) {
    let stack  = [ root ];

    while (stack.length) { //while stack.length > 0
        let node = stack.pop();
        console.log(node.val);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
}

// DFS - RECURSIVE:
function depthFirstRecursive(root) {
    if (!root) return;

    console.log(root.val);
    depthFirstRecursive(root.left);
    depthFirstRecursive(root.right);
} //(note that this is the same as preorder search)


// BFS
function breadthFirst(root) {
    let queue = [ root ];

    while (queue.length) {
        let node = queue.shift();
        console.log(node.val)
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}