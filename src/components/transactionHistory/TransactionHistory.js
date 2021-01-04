import React from 'react';
import PropTypes from 'prop-types';

export default function TransactionHistory({ type, amount, currency }) {
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
