import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistory from './TransactionHistory';

export default function TransactionList({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <TransactionHistory
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </table>
  );
}

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
