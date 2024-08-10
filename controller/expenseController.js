const Expense = require("../models/expenseSchema")

const addExpense = async (req, res) => {

    const { title, description, category, date, amount } = req.body

    if (!title || !amount || !category || !date || !description) {
        res.status(401)
        throw new Error("Pls fill all details")
    }

    if (amount <= 0 || !amount === "number") {
        res.status(401)
        throw new Error("Amount Error")
    }

    const income = await Expense.create({
        title,
        description,
        amount,
        category,
        date
    })

    if (income) {
        res.status(200).json(income)
    } else {
        res.status(401)
        throw new Error("Expense Not Created")
    }
}

const deleteExpense = async (req, res) => {
    const deleted = await Income.findByIdAndDelete(req.params.id)
    if (deleted) {
        res.status(200).json("Deleted")
    } else {
        res.status(401)
        throw new Error("Not Deleted")
    }
}

const getExpense = async (req, res) => {
    const incomes = await Expense.find().sort({ createdAt: -1 })
    if (incomes) {
        res.status(200).json(incomes)
    } else {
        res.status(401)
        throw new Error("No Expense Found")
    }
}

module.exports = { addExpense, deleteExpense, getExpense }