import React, { useContext } from 'react';
import { GlobalContaxt } from '../context/GlobalState';

function Balance() {
  const { transactions } = useContext(GlobalContaxt);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
    </div>
  )
}

export default Balance;