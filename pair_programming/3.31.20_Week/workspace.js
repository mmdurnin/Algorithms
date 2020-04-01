/*
Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array.
Here a k-diff pair is defined as an integer pair (i, j),
where i and j are both numbers in the array and their absolute difference is k.

input: [3, 1, 4, 1, 5], 2
output: 2
explanation: [[3, 1], [5, 2]]

input: [1, 1, 1, 1, 1], 0
output: 1
explanation: [[1, 1]]

***************

input: [1, 2, 3, 4], 0
output: 0
explanation: no numbers whose absolute difference is 0

input: [1, 2, 3], -1
output: 0
explanation: no numbers whose absolute difference is -1

input: [1, 2, 3, 4, 5, 6, 7], 2
output: 5
explanation: [[1, 3], [2, 4], [3, 5], [4, 6], [5, 7]]

*/


/*
Write a function/ program that will calculate expenses for a given group of people.
Here is the prompt with an example:

Sarah rents a car for the trip - she pays $400 for the car, which is used by Alice, John, Bob and herself.
Later in the trip, John went out and bought groceries for $100, which he shared with Alice and Bob.
Now, the trip is over and everyone wants to get paid back what they are owed
- print out the list of transactions that would settle everyone's debts.

This is a flexible exercise. The solution that I came up with has the following inputs and outputs:

let campingTrip = new ExpenseRecord();
let [sarah, john, bob, alice] = campingTrip.addMembers("Sarah", "John", "Bob", "Alice");
campingTrip.addExpense(sarah, [alice, john, bob], 400)
campingTrip.addExpense(john, [alice, bob], 100)
campingTrip.printExpenses() // -> Sarah is owed $300
                               -> Alice owes $133
                               -> John owes $33
                               -> Bob owes $133
*/