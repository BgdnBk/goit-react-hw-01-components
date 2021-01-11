import React from 'react';
import PropTypes from 'prop-types';

import Statistik from './StatisticsList';
import s from './statistic.module.css';

function StatisticList({ stats, title }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title ? title : ''}</h2>
      <ul className={s.statList}>
        {stats.map(stat => (
          <Statistik key={stat.id} label={stat.label} stats={stat.percentage} />
        ))}
      </ul>
    </section>
  );
}

export default StatisticList;

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
