
/*
 * Complete the 'minCost' function below.
 *
 * For a given integer , there is a tower built from  blocks stacked vertically. 
 * Each of these blocks can be colored in  different colors: red, green or blue. 
 * Each block is associated with a cost for each color. No two blocks can have the same color
 * Return the minimum cost to color all blocks
 * 
 * ex: [
 * [1, 2, 3],
 * [1, 2, 3],
 * [3, 2, 1]]
 * min cost = 4
 * 
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY cost as parameter.
 */

function minCost(cost) {
    let store = {}
    let sum = 0
    let neighbor = Infinity

    for (let i = 0; i < cost.length; i++) {
        console.log(neighbor)
        let currentBlock = cost[i];
        let price = Math.min.apply(Math, currentBlock)
        let idx = currentBlock.indexOf(price)
        let nextPrice = Math.min.apply(Math, currentBlock.slice(0, idx).concat(currentBlock.slice(idx + 1)))
        let nextIdx = currentBlock.indexOf(nextPrice)
        store[i]["min"] = price
        store[i]["nextMin"] = nextPrice

        if (idx === neighbor) {
            changedIdx = store[i]["nextMin"] < store[i - 1]["nextMin"] ? i : i - 1
        }
        sum += price
        neighbor = idx
    }
    return sum
}