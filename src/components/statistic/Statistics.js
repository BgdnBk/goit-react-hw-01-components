import React from 'react';
import PropTypes from 'prop-types';

import Statistik from './StatisticsList';
import s from './statistic.module.css';

function StatisticList({ items, title }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title ? title : ''}</h2>
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
