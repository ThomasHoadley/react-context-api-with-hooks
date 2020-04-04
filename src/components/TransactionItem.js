import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionItem = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = (transaction.amount < 0 ? '-' : '+')
    const borderColor = (transaction.amount < 0 ? 'minus' : 'plus')

    return (
        <li className={borderColor}>
            {transaction.text} <span>{sign}£{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
