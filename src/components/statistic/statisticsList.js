import React from 'react';
import PropTypes from 'prop-types';
import s from './statistic.module.css';

export default function Statistics({ label, stats }) {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: `rgba( ${random()} , ${random()} , ${random()} )`,
      }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}> {stats}%</span>
    </li>
  );
}

function random() {
  return Math.floor(Math.random() * 256);
}

Statistics.propTypes = {
  label: PropTypes.string,
  stats: PropTypes.number.isRequired,
};
