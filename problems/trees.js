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
c.right = k;