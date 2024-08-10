const Income = require("../models/incomeSchema")

const addIncome = async (req, res) => {

    const { title, description, category, date, amount } = req.body

    if (!title || !amount || !category || !date || !description) {
        res.status(401)
        throw new Error("Pls fill all details")
    }

    if (amount <= 0 || !amount === "number") {
        res.status(401)
        throw new Error("Amount Error")
    }

    const income = await Income.create({
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
        throw new Error("Income Not Created")
    }
}

const deleteIncome = async (req, res) => {
    const deleted = await Income.findByIdAndDelete(req.params.id)
    if (deleted) {
        res.status(200).json("Deleted")
    } else {
        res.status(401)
        throw new Error("Not Deleted")
    }
}

const getIncome = async (req, res) => {
    const incomes = await Income.find().sort({ createdAt: -1 })
    if (incomes) {
        res.status(200).json(incomes)
    } else {
        res.status(401)
        throw new Error("No Income Found")
    }
}

module.exports = { addIncome, deleteIncome, getIncome }