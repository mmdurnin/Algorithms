/*
GRAPH: A graph is a collection of nodes and edges between those nodes
- It doesn't have to have a root node
- It can have cycles
- It can have any number of edges leaving a node
Defined by neighbors because it a node doesn't necessariy have parent / children
*/

// Graph Class
class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');

a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

/*
ADJACENCY MATRIX
* Use 2d array representing the edges
It seems like if 2 nodes are adjacent, you will write "true" in the matrix
    A   B
A true true
B true true
(where A and B are adjacent) - also you can say that a node is adjacent with itself

If a node has direction A might be adjacent to B but B might not be adjacent to B

Uses n2 space
*/

/*
ADJACENCY LIST
keys = nodes
values = neighbors of node
good for atttacking problems that are not specifically about graphs
*/

/*
GRAPH TRAVERSALS
Have to decide what node to begin traversal. One might have a good starting point
In arguments, initialize a set to store already visited nodes (otherwise stuck in a loop)

*/

//GRAPH TRAVERSAL WITH GRAPHNODE
function depthFirstRecur(node, visited=new Set()) {
    if (visited.has(node.val)) return
    console.log(node.val);
    visited.add(node.val)

    node.neighbors.forEach((neighbor) => {
        depthFirstRecur(neighbor, visited);
    });
}

depthFirstRecur(f);
//You can also write it iteratively by implementing a stak instead



//GRAPHNODE TRAVERSAL WITH ADJACENCY LIST
let graph = {
    'a': ['b', 'c', 'e'],
    'b': [],
    'c': ['b', 'd'],
    'd': [],
    'e': ['a'],
    'f': ['e']
};
//(nodes are strings now)

//ADJACENCY LIST TRAVERSAL
function depthFirstListRecur(node, graph, visited=new Set()) {
    if (visited.has(node)) return;

    console.log(node);
    visited.add(node);

    graph[node].forEach((neighbor) => {
        depthFirstListRecur(neighbor, graph, visited);
    });
}

depthFirstListRecur('f', graph);

//BUT if we choose a starting node that can't reach the rest of the graph then we won't hit all the nodes. Here is the fix

function depthFirstList(graph) {
    let visited = new Set();
    for (let node in graph) {
        _depthFirstListRecur(node, graph, visited);
    }

    function _depthFirstListRecur(node, graph, visited) {
        if (visited.has(node)) return

        console.log(node);
        visited.add(node);

        graph[node].forEach(neighbor => {
            _depthFirstListRecur(neighbor, graph, visited);
        })
    }
}

depthFirstList(graph);

/*
DIJKSTRAS ALGORITHM
most well known algorithm for calculating shortest path between two nodes
*/

function dijsktras(graph, source) {
    let distance = {}
    for (let node in graph) {
        distance[node] = Infinity
    }

    distance[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let previous = {};

    while (unvisited.size > 0) {
        let currentNode = minDistanceNode(unvisited, distance);
        unvisited.delete(currentNode);

        for (let neighbor in graph[currentNode]) {
            let distanceFromCurrent = graph[currentNode][neighbor];
            let totalNeighborDistance = distance[currentNode] + distanceFromCurrent

            if (distance[neighbor] > totalNeighborDistance) {
                distance[neighbor] = totalNeighborDistance;
                previous[neighbor] = currentNode;
            }
        }
    }

    return { distance, previous }
}

function minDistanceNode(nodes, distance) {
    return Array.from(nodes).reduce((minNode, node) => (
        distance[node] < distance[minNode] ? node : minNode
    ));
}