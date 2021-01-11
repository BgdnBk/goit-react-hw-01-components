import React from 'react';
import PropTypes from 'prop-types';
// import TransactionList from './TransactionList';
import s from './transaction.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <tr className={s.item}>
            <td className={s.type}>{item.type}</td>
            <td className={s.amount}>{item.amount}</td>
            <td className={s.currency}>{item.currency}</td>
          </tr>
        </tbody>
        // <TransactionList
        //   key={item.id}
        //   type={item.type}
        //   amount={item.amount}
        //   currency={item.currency}
        // />
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
