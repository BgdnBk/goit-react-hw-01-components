import React from 'react';
import PropTypes from 'prop-types';
import s from './transaction.module.css';

export default function TransactionHistory({ type, amount, currency }) {
  return (
    <tbody>
      <tr className={s.item}>
        <td className={s.type}>{type}</td>
        <td className={s.amount}>{amount}</td>
        <td className={s.currency}>{currency}</td>
      </tr>
    </tbody>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
