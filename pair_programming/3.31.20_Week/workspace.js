/*
Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array.
Here a k-diff pair is defined as an integer pair (i, j),
**where i and j are both numbers in the array and their absolute difference is k.**

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

This is a flexible exercise. You can decide on what inputs your program will take, so long as you get an output
that logs how much people owe/ are owed.

The solution that I came up with requires the following:

let campingTrip = new ExpenseRecord();
let [sarah, john, bob, alice] = campingTrip.addMembers("Sarah", "John", "Bob", "Alice");
campingTrip.addExpense(sarah, [alice, john, bob], 400)
campingTrip.addExpense(john, [alice, bob], 100)
campingTrip.printExpenses() 

                               -> Sarah is owed $300
                               -> Alice owes $133
                               -> John owes $33
                               -> Bob owes $133
*/

/*
Given two integers dividend and divisor, divide two integers 
without using multiplication, division and mod operator.
Return the quotient after dividing dividend by divisor.
The integer division should truncate toward zero, 
which means losing its fractional part. 
For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only 
store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, 
assume that your function returns 231 − 1 when the division result overflows.
*/