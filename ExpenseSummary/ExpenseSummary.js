const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

function createExpensesSummary(expenses, category, amount){
    expenses.push({id: expenses.length + 1, category: category, amount: amount })
    return expenses
}

function calculateCategoryTotal(expenses, category){
    return expenses
        .filter(expenses => expenses.category === category)
        .reduce((total, expenses) => total + expenses.amount, 0)
}

function calculateTotal(expenses){
    return expenses.reduce((total, expenses) => total + expenses.amount, 0)
}

function findLargestExpense(expenses){
    return expenses.reduce((largest, expenses) => {
        return expenses.amount > largest.amount ? expenses : largest
    })
}

console.log(calculateTotal(expenses))