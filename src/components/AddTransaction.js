import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction, transactions } = useContext(GlobalContext)

    function handleSubmit(e) {
        e.preventDefault()
        const newTransaction = {
            id: transactions.length + 1,
            text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
