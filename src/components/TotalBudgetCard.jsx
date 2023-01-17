import React from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext'
import BudgetCard from './BudgetCard'

export default function TotalBudgetCard({props}) {
    const { expenses, budgets } = useBudgets()
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 
    0
    )
    const totalBudgets = budgets.reduce((total, budget) => total + budget.max, 
    0
    )
    if (totalBudgets === 0) return null
  return (
    <BudgetCard name="Total" gray amount={totalExpenses} max={totalBudgets} {...props} hideButton />
  )
}
