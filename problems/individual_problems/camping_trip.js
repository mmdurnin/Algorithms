/*
 Sarah rents a car for the trip - she pays $400 for the car, which is used by Alice, John, Bob and herself.
    Later in the trip, John went out and bought groceries for $100, which was used only by Alice and Bob.

Now, the trip is over and everyone wants to get paid back what they are owed 
- print out the list of transactions that would settle everyone's debts.

*/
// class TripExpenseRecord {
//   constructor() {
//     this.members = [];
//     this.totalExpenses = 0;
//   }

//   addMember(name) {
//     let member = new TripMember(name);
//     this.members.push(member);
//     return member;
//   }

//   addMembers(names) {
//     for (let i = 0; i < names.length; i++) {
//       let name = names[i];
//       let member = new TripMember(name);
//       this.members.push(member);
//     }

//     return this.members;
//   }

//   addExpense(payee, payers, amount) {
//     let expense = new Expense(payee, payers, amount);
//     let owedTo = expense.calculateOwedTo();
//     let owedFromEach = expense.calculateOwedFromEach();

//     this.members.forEach((member) => {
//       if (member === payee) {
//         member.addCredit(owedTo)
//       } else if (payers.includes(member)) {
//         member.addDebt(owedFromEach)
//       }
//     })

//     this.totalExpenses += amount;
//     return this.totalExpenses;
//   }

//   printTotals() {
//     this.members.forEach(member => {
//       console.log(`${member.name} should contribute ${Math.round(member.oweOut)} and is owed ${Math.round(member.isOwed)}. total credit: ${Math.round(member.isOwed) - Math.round(member.oweOut)}`)
//     })
//     return this.totalExpenses;
//   }
// }

// class TripMember {
//   constructor(name) {
//     this.name = name;
//     this.oweOut = 0;
//     this.isOwed = 0;
//   }

//   addDebt(amount) {
//     this.oweOut += amount;
//     return this.oweOut;
//   }

//   addCredit(amount) {
//     this.isOwed += amount;
//   }
// }

// class Expense {
//   constructor(payee, payers, amount) {
//     this.payee = payee;
//     this.payeeIsOwed = 0;
//     this.payers = payers;
//     this.payersOwe = 0;
//     this.amount = amount;
//   }

//   calculateOwedTo() {
//     let divisor = 1 + this.payers.length;
//     let individualAmount = this.amount / divisor;
//     this.payeeIsOwed = individualAmount * this.payers.length;
//     return this.payeeIsOwed
//   }

//   calculateOwedFromEach() {
//     let divisor = 1 + this.payers.length;
//     let individualAmount = this.amount / divisor;
//     this.payersOwe = individualAmount;
//     return this.payersOwe
//   }
// }

// let campingTrip = new TripExpenseRecord();
// let [alice, john, bob, sarah] = campingTrip.addMembers(["alice", "john", "bob", "sarah"])
// campingTrip.addExpense(sarah, [alice, john, bob], 400)
// campingTrip.addExpense(john, [alice, bob], 100)
// campingTrip.printTotals();


class Expense {
  constructor(creditor, debtors, amount) {
    this.creditor = creditor;
    this.debtors = debtors;
    this.amount = amount;
  }

  calculateCredit() {
    let divisor = this.debtors.length + 1;
    let amountForEach = this.amount / divisor;
    return amountForEach * this.debtors.length;
  }

  calculateDebt() {
    let divisor = this.debtors.length + 1;
    return this.amount / divisor;
  }
}

class ExpenseMember {
  constructor(name) {
    this.name = name;
    this.credit = 0;
    this.debt = 0;
  }

  addCredit(amount) {
    this.credit += amount;
    return this.credit;
  }

  addDebt(amount) {
    this.debt += amount;
    return this.debt;
  }
}

class ExpenseRecord {
  constructor() {
    this.members = [];
    this.expenseTotal = 0;
  }

  addMembers(...names) {
    names.forEach(name => this.members.push(new ExpenseMember(name)))
    return this.members;
  }

  addExpense(creditor, debtors, amount) {
    let expense = new Expense(creditor, debtors, amount);

    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (creditor === member) member.addCredit(expense.calculateCredit());
      if (debtors.includes(member)) member.addDebt(expense.calculateDebt());
    }
    this.expenseTotal += amount;
    return this.expenseTotal;
  }

  printTotals() {
    this.members.forEach(member => {
      let memberTotal = member.credit - member.debt;
      console.log((memberTotal <= 0) ? `${member.name} owes $${Math.abs(memberTotal)}` : `${member.name} is owed $${memberTotal}`)
    })
  }
}

let campingTrip = new ExpenseRecord();
let [alice, john, bob, sarah] = campingTrip.addMembers("alice", "john", "bob", "sarah");
campingTrip.addExpense(sarah, [alice, john, bob], 400);
campingTrip.addExpense(john, [alice, bob], 100);
campingTrip.printTotals();