/*
Write a function that takes an array and a target sum. If two numbers added together = the target sum, return the 
two numbers in an array, else return an empty array.

*/
function twoNumberSum(array, targetSum) {
    let visited = {};
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let remainder = targetSum - num;

        if (!!visited[remainder]) return [remainder, num]
        !!visited[num] ? visited[num].push(i) : visited[num] = i;
    }
    return []
}

console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17))