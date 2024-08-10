const express = require("express")
const { addIncome, deleteIncome, getIncome } = require("../controller/incomeController")
const { addExpense, getExpense, deleteExpense } = require("../controller/expenseController")
const router = express.Router()

router.post('/add-income', addIncome)
router.get('/get-incomes', getIncome)
router.delete('/delete-income/:id', deleteIncome)
router.post('/add-expense', addExpense)
router.get('/get-expense', getExpense)
router.delete('/delete-expense/:id', deleteExpense)


module.exports = router