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

/**
 * A owes C 50
 * C owes A 100
 * B owes C 50
 * total: B => A 50
 * 
 * Sarah paid $400 | Alice, Bob, Sarah, John
 * Payers: Sarah, Amount: 400, Owers: [Alice, Bob, Sarah, John]
 * 
 * John paid $100  | Alice, Bob
 * Payers: John, Amount : 100, Owers: [Alice, Bob]
 * 
 * expensesArray = 
 * [
 * {Payers: Sarah, Amount: 400, Owers: [Alice, Bob, Sarah, John]},
 * {Payers: John, Amount : 100, Owers: [Alice, Bob]}
 * ]
 * 
 * 
 * function splitWise(expenseArray)
 * instantiate a bill, a hash that tracks all
 * persons in the transaction as keys. Their values will be
 * monetary values.
 * 
 * iterate through each expense object in array
 *   add payer and owers to bill.
 *   run helper function on each expense.
 * 
  * create helper which...
  *   takes in the expense object and bill.
  *   add amount to payers split evenly
  *   splits the expense[Amount] by the expense[Owers] evenly
  *   subtract those values.
  *     e.g. Payers: Sarah, Amount: 400, Owers: [Alice, Bob, Sarah, John]
  *     Sarah:300, Alice: -100
  *   all values mutate bill so no need to return.
 * 
 * let response = "";
 * iterate through Object.keys(bill) to create a string response.
 *   if bill[name] > 0 : response += name is owed bill[name] \n
 *   else:  response += name owes bill[name] \n;
 *   return response;
 */



function splitWise(expensesArray){
  let bill = {};
  expensesArray.forEach(expense => {
    splitHelper(expense);
  });  


  function splitHelper(expense) {
    // Payer
    if (!bill[expense["Payers"]]) {
      bill[expense["Payers"]] = expense["Amount"];
    }
    else{
      bill[expense["Payers"]] += expense["Amount"];
    }
      
    // Owers
    const owedCut = expense["Amount"]/expense["Owers"].length;
    expense["Owers"].forEach(ower => {
      if (!bill[ower]){
        bill[ower] = -owedCut;
      } 
      else {
        bill[ower] -= owedCut;
      }
    });
  }
  // console.log(bill);
}

let expensesArray = 
[
  { Payers: "Sarah", Amount: 400, Owers: ["Alice", "Bob", "Sarah", "John"] },
  { Payers: "John", Amount: 100, Owers: ["Alice", "Bob", "John"] }
];

// splitWise(expensesArray);

