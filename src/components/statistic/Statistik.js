import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({ label = '', stats }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage"> {stats}%</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  stats: PropTypes.number.isRequired,
};
