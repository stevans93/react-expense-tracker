import React, { useContext } from 'react';
import { GlobalContaxt } from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
  const { transactions } = useContext(GlobalContaxt);

  return (
    <div>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction => {
            return <Transaction key={transaction.id} transaction={transaction} />
          })}
            
        </ul>
    </div>
  )
}

export default TransactionList;