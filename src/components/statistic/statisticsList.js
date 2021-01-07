import React from 'react';
import PropTypes from 'prop-types';

import Statistik from './Statistik';
import s from './statistic.module.css';

function StatisticList({ items }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>UPLOAD STATS</h2>
      <ul className={s.statList}>
        {items.map(item => (
          <Statistik key={item.id} label={item.label} stats={item.percentage} />
        ))}
      </ul>
    </section>
  );
}

export default StatisticList;

StatisticList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
